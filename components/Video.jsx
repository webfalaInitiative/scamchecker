import React, { useState } from "react";


const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const video = document.getElementById("video");
    video.play();
  };

  return (
    <div className="relative w-[100%] ">
      {!isPlaying && (
        <div className="relative w-full ">
          <img src="/images/Video.png" alt="Thumbnail" className=" h-full w-3/4 object-cover m-auto" />
          <button className="absolute md:h-16 md:w-16 h-10 w-10 bg-white rounded-[50%] flex justify-center items-center top-1/4 left-2/4 z-10" onClick={handlePlay}>
            <img src="/images/Polygon 1.png" alt="Play"  className="md:h-10 md:w-10 h-5 w-5"/>
          </button>
        </div>
      )}
      {isPlaying && (
        <video 
          className="m-auto"
          id="video"
          width="1000"
          height="1000"
          controls
          onPause={() => setIsPlaying(false)}
        >
          <source src="../video/linkguardvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
