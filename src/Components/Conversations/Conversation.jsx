import React from "react";
import "./Conversation.css";
function Conversation({DP, Name}) {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={DP}
        alt=""
      />
      <span className="conversationName"> {Name} </span>
    </div>
  );
} 

export default Conversation;
