import { HeaderLogo } from "../utils/ImageUrls";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGptSearch } from "../store/gptSearchSlice";
import { selectLanguage } from "../store/languageSlice";
import lang from "../utils/langConstants";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const gptPage = useSelector(store => store.gpt.showGPTSearch)
    const langSelected = useSelector(store => store.lang.selectedLang)

    const handleSignout = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            navigate("/error")
          });
    }

    const handleToggleGptSearch = () => {
        dispatch(toggleGptSearch())
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              navigate("/browse")
            } else {
              dispatch(removeUser());
              navigate("/")
            }
          });

          // Unsubscribe when component unmounts
          return () => unsubscribe()
    }, [])

    const handleLanguage = (e) => {
      dispatch(selectLanguage(e.target.value))
    }

    return (
        <div className="absolute w-full px-5 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={HeaderLogo} alt="HeaderLogo" />
            {user && <div className="flex p-3">
                <select className="bg-gray-300 w-40 p-2 mx-4 my-2 rounded-lg" onChange={handleLanguage}>
                  <option value="en"> English </option>
                  <option value="hi"> Hindi </option>
                  <option value="sp"> Spanish </option>
                  <option value="ja"> Japanese </option>
                  <option value="ta"> Tamil </option>
                </select>
                <button onClick={handleToggleGptSearch} className="bg-purple-500 text-white p-3 rounded-lg"> { gptPage ? (lang[langSelected].home) : (lang[langSelected].gpt) } </button>
                <h1 className="font-bold text-yellow-500 text-3xl mx-4 my-2"> {user.displayName} </h1>
                <img className="mx-3 w-14 rounded-full" src={user?.photoURL} alt="User Img"/>
                <button className="border border-black p-2 rounded-lg bg-red-400" onClick={handleSignout}> {lang[langSelected].signout} </button>
            </div>}
        </div>
    )
}

export default Header;