import { useRef, useState } from "react";
import { LoginBgLogo } from "../utils/ImageUrls";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { UserLogo } from "../utils/ImageUrls";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, SetErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleButtonSignIn = () => {
        if(fullname.current === null ) {
            // Sign  In
            const message = checkValidateData(email.current.value, password.current.value);
            SetErrorMessage(message);

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                const user = userCredential.user;
                console.log("Sign In User ", user)
                navigate("/browse");
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            SetErrorMessage(errorCode + "-" +errorMessage);
        });
            
        }else{
            // Sign Up 
            const message = checkValidateData(email.current.value, password.current.value, fullname.current.value);
            SetErrorMessage(message);

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                const user = userCredential.user;
                console.log("User in login page ", user);

                updateProfile(user, {
                    displayName: fullname.current.value, photoURL: UserLogo
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                    navigate("/browse")
                  }).catch((error) => {
                    SetErrorMessage(error.message)
                  });

                console.log("User ", user)
                navigate("/browse");
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            SetErrorMessage(errorCode + "-" +errorMessage);
            });
        }
    }

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    } 
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="max-h-screen w-screen" src={LoginBgLogo} alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black w-3/12 right-0 left-0 mx-auto my-36 text-white p-12 rounded-3xl opacity-85">
                <h1 className="font-bold text-3xl py-4 m-2"> {isSignIn ? "Sign In" : "Sign Up"} </h1>
                { !isSignIn && <input ref={fullname} placeholder="Full Name" type="text" className="py-2 my-6 w-full p-2 bg-black opacity-85" /> }
                <input ref={email} placeholder="Email Address" type="text" className="py-2 my-6 w-full p-2 bg-black opacity-85" />
                <input ref={password} placeholder="Password" type="password" className="py-2 my-6 w-full p-2 bg-black opacity-85" />
                <p className="text-red-700 font-bold text-lg mx-2"> {errorMessage}</p>
                <button className="py-4 m-2 my-10 bg-red-700 w-full rounded-2xl" type="Submit" onClick={handleButtonSignIn}> {isSignIn? "Sign In" : "Sign Up"} </button>
                <p className="m-2 py-2"> {isSignIn? "New to Netflix" : "Already Have an account"} ? <span className="cursor-pointer text-red-400" onClick={toggleSignIn}> {isSignIn? "Sign Up":"Sign In"}</span> </p>
            </form>
        </div>
    )
}

export default Login;