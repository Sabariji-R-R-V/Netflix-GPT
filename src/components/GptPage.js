import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { GptPageBackground } from "../utils/ImageUrls"

const GptPage = () => {

    return (
        <div>
            <div className="absolute -z-10">
                <img src={GptPageBackground} alt="GPT-Background" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptPage;