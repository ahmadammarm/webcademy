import React from "react";

function Video() {

  return (
    <div className="
    flex
    relative
    ">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TjYp6n5xCv0?si=BCn7kc9oUg67hyk6"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-md"
      ></iframe>
    </div>
  );
}

export default Video;
