import { HeaderLogo } from "../utils/ImageUrls";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { emptySuggestedMoviesList, toggleGptSearch } from "../store/gptSearchSlice";
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

        if(!gptPage) {
          dispatch(emptySuggestedMoviesList({names: null, movies: null}))
        }
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
        <div className="absolute w-full px-5 py-2 bg-gradient-to-b from-black to-transparent z-10 flex justify-between flex-col md:flex-row">
            <img className="mt-0 h-20 md:w-44 w-320 mx-auto md:mx-2" src={HeaderLogo} alt="HeaderLogo" />
            {user && <div className="flex md:p-3 justify-between md:text-sm text-xs">
                <select className="bg-gray-300 w-40 p-2 md:mx-4 mx-0 my-2 rounded-lg" onChange={handleLanguage}>
                  <option value="en"> English </option>
                  <option value="hi"> Hindi </option>
                  <option value="sp"> Spanish </option>
                  <option value="ja"> Japanese </option>
                  <option value="ta"> Tamil </option>
                </select>
                <button onClick={handleToggleGptSearch} className="bg-purple-500 text-white p-2 rounded-lg md:mr-4"> { gptPage ? (lang[langSelected].home) : (lang[langSelected].gpt) } </button>
                {/* <h1 className="font-bold text-yellow-500 text-3xl mx-4 my-2"> {user.displayName} </h1> */}
                <button className="border border-black p-2 rounded-lg bg-red-400" onClick={handleSignout}> {lang[langSelected].signout} </button>
            </div>}
        </div>
    )
}

export default Header;