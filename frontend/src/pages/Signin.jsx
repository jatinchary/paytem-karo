import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";

export const Signin = () => {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = () => {
        axios.post("http://localhost:3000/api/v1/user/signin", { username , password })
            .then(response => {
                // Handle successful signin
                console.log('Signin successful:', response);
                navigate('/dashboard'); // Redirect to dashboard
            })
            .catch(error => {
                // Handle error
                console.error('Signin error:', error);
            });
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox 
                        placeholder="jatin@gmail.com" 
                        label={"Email"} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <InputBox 
                        placeholder="123456" 
                        label={"Password"} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <div className="pt-4">
                        <Button label={"Sign in"} onClick={handleSignin} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};
