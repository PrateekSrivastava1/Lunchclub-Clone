import React from "react";
import "./ChatOnline.css";
function ChatOnline() {
  return (
    <div className="div">
      <div className="chatonline">
        <img
          className="chatonlineImg"
          src="https://lunchclub.com/static/media/default-picture.90b9161a.svg"
          alt=""
        />
        <span className="chatonlineName"> Online Man Name </span>
      </div>
      <div className="chatonlineTime info">25 minutes ago</div>
    </div>
  );
}

export default ChatOnline;
