import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {

    const langSelected = useSelector(store => store.lang.selectedLang)

    return (
        <div className="pt-[10%] flex justify-center rounded-xl">
            <form onSubmit={(e) => e.preventDefault()} className="w-1/2 bg-black grid grid-cols-12 p-5 bg-opacity-40">
                <input className="rounded-lg border border-solid border-black w-auto p-5 mx-5 col-span-9" 
                    placeholder={lang[langSelected].placeholder}/>
                <button className="bg-red-500 text-white font-bold p-3 mx-3 rounded-lg col-span-3" 
                    type="Submit"> {lang[langSelected].search} </button>
            </form>
        </div>
    )
}

export default GptSearchBar;