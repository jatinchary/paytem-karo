// backend/db.js
const mongoose = require('mongoose');

//fLic3nKh4GKUpKfY  
//charyjatin


const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://charyjatin:fLic3nKh4GKUpKfY@cluster0.smxjx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  connectDB();

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});





const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});







// Create a model from the schema
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);


module.exports = {
	User,
    Account
};