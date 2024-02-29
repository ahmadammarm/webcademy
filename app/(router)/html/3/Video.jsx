import React from "react";

function Video() {

  return (
    <div className="flex relative">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9g1Zz83FXyc?si=IVV6oWHy6dFKHfSa"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;

