import React from "react";

function Video() {
  return (
    <div className="flex relative">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sYbs7VHhSbY?si=e8ViPQfcOndOaaQl" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-md"
      ></iframe>
    </div>
  );
}

export default Video;
