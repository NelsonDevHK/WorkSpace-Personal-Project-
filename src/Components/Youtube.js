import React from "react";
import ReactPlayer from "react-player";

export const Youtube = ({YoutubeLink}) => {
    return(
        <ReactPlayer className="youtube" playing={true} url={YoutubeLink}/>
    )
}