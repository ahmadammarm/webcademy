import React from "react";

function Video() {

  return (
    <div className="flex relative">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qfn67VjdgZE?si=evOt3nmzIVGVXyT5"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-md w-full"
      ></iframe>
    </div>
  );
}

export default Video;

