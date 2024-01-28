import { HeaderLogo } from "../utils/ImageUrls";

const Header = () => {
    return (
        <div className="absolute px-5 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44" src={HeaderLogo} alt="HeaderLogo" />
        </div>
    )
}

export default Header;