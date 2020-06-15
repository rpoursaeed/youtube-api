import React from "react";
import "./Videoitem.css";

const Videoitem = ({ video, onvideoselect }) => {
  return (
    <div onClick={() => onvideoselect(video)} className="videoitem-box">
      <img
        src={video.snippet.thumbnails.medium.url}
        className="videoitem-img"
        width="168px"
      />
      <div className="videoitem-title">
        <p> {video.snippet.title}</p>
      </div>
    </div>
  );
};

export default Videoitem;
