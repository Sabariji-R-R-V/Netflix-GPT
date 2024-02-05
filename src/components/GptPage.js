import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { GptPageBackground } from "../utils/ImageUrls"
import { useSelector } from "react-redux"

const GptPage = () => {

    const gptSuggestedMoviesName = useSelector(store => store.gpt.gptSuggestedMoviesName)

    return (
        <div>
            <div className="fixed -z-10">
                <img className="md:h-full h-screen object-cover" src={GptPageBackground} alt="GPT-Background" />
            </div>
            <div className="md:pt-[0%] pt-[35%]">
                <GptSearchBar />
                { gptSuggestedMoviesName && <GptMovieSuggestions />}
            </div>
        </div>
    )
}

export default GptPage;