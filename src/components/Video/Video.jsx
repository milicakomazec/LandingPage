import React from "react";

import "./index.css";

const Video = () => {
  return (
    <div className="video-container">
      <iframe
        title="video"
        src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
        height="315px"
        width="580px"
      ></iframe>
    </div>
  );
};

export default Video;
