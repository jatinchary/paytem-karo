const express = require('express');
const { authMiddleware } = require("../middleware");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config");

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

////signup
router.post("/signup", async (req, res) => {
    const { success, error } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: error?.issues || "Invalid input"
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if (existingUser) {
        return res.status(409).json({
            message: "Email already taken"
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });
    const userId = user._id;

    // Create new account
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    });

    const token = jwt.sign({ userId }, JWT_SECRET);
    res.json({
        message: "User created successfully",
        token: token
    });
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

////signin
router.post("/signin", async (req, res) => {
    const { success, error } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: error?.issues || "Invalid input"
        });
    }

    const user = await User.findOne({
        username: req.body.username
    });

    if (user && await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        return res.json({ token: token });
    }

    res.status(401).json({
        message: "Invalid username or password"
    });
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
    const { success, error } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: error?.issues || "Invalid input"
        });
    }

    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        message: "Updated successfully"
    });
});

////filter
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [
            { firstName: { "$regex": filter, "$options": "i" } },
            { lastName: { "$regex": filter, "$options": "i" } }
        ]
    });

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
});

module.exports = router;
