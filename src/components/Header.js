import { HeaderLogo } from "../utils/ImageUrls";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    console.log("User in Header ", user);

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error")
          });
    }

    return (
        <div className="absolute w-full px-5 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={HeaderLogo} alt="HeaderLogo" />
            {user && <div className="flex p-3">
                <h1 className="font-bold text-yellow-500 text-3xl mx-4 my-2"> {user.displayName} </h1>
                <img className="mx-3 w-14 rounded-full" src={user?.photoURL} alt="User Img"/>
                <button className="border border-black p-2 rounded-lg bg-red-400" onClick={handleSignout}> Sign out </button>
            </div>}
        </div>
    )
}

export default Header;