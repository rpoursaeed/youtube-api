import React from "react";
import "./Videodetail.css";

const videodetail = ({ onvideodetail }) => {
  if (!onvideodetail) {
    return <div>loading</div>;
  }
  const videosource = `https://www.youtube.com/embed/${onvideodetail.id.videoId}`;
  return (
    <div className="iframe-box">
      <iframe width="640" height="360" src={videosource} className="iframe" />
      <p>
        {onvideodetail.snippet.title}
        {onvideodetail.snippet.description}
      </p>
    </div>
  );
};

export default videodetail;
