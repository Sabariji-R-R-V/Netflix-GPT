import { useState } from "react";
import { LoginBgLogo } from "../utils/ImageUrls";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    } 
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={LoginBgLogo} alt="logo" />
            </div>
            <form className="absolute bg-black w-3/12 right-0 left-0 mx-auto my-36 text-white p-12 rounded-3xl opacity-85">
                <h1 className="font-bold text-3xl py-4 m-2"> {isSignIn ? "Sign In" : "Sign Up"} </h1>
                { !isSignIn && <input placeholder="Full Name" type="text" className="py-2 my-6 w-full p-2 bg-black opacity-85" /> }
                <input placeholder="Email Address" type="text" className="py-2 my-6 w-full p-2 bg-black opacity-85" />
                <input placeholder="Password" type="password" className="py-2 my-6 w-full p-2 bg-black opacity-85" />
                <button className="py-4 m-2 my-10 bg-red-700 w-full rounded-2xl" type="Submit"> {isSignIn? "Sign In" : "Sign Up"} </button>
                <p className="m-2 py-2"> {isSignIn? "New to Netflix" : "Already Have an account"} ? <span className="cursor-pointer text-red-400" onClick={toggleSignIn}> {isSignIn? "Sign Up":"Sign In"}</span> </p>
            </form>
        </div>
    )
}

export default Login;