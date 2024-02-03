const VideoTitle = ({title, overview}) => {
    return <div className="w-full aspect-video absolute pt-56 px-20 bg-gradient-to-r from-black text-white">
        <h1 className="font-bold w-1/3 text-3xl"> { title } </h1>
        <p className="mt-5 w-1/3 text-lg"> { overview } </p>
        <div className="my-5">
            <button className="border bg-white border-black text-black w-28 font-bold text-lg rounded-lg py-3 hover:opacity-80"> ▶️ Play </button>
            <button className="mx-3 border bg-white text-black border-black w-28 font-bold text-lg rounded-lg py-3 hover:opacity-80"> More Info </button>
        </div>
    </div>
}

export default VideoTitle;
