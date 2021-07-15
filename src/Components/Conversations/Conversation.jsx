import React from "react";
import "./Conversation.css";
function Conversation(props) {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={props.DP}
        alt=""
      />
      <span className="conversationName"> {props.Name} </span>
    </div>
  );
} 

export default Conversation;
