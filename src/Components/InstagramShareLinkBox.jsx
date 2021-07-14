import React from "react";
import "./InstagramShareLinkBox.css";

function InstagramShareLinkBox(props) {
  return (
    <div>
      <textarea className=" info socialShareLinkBox">{props.children}</textarea>
      {console.log(props.children)}
    </div>
  );
}

export default InstagramShareLinkBox;
