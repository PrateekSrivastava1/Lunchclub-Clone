import React from "react";
import "./InstagramShareLinkBox.css";

function FacebookShareLinkBox({Link}) {
  return (
    <div>
      <textarea className=" info socialShareLinkBox">
        {Link}
      </textarea> 
    </div>
  );
}

export default FacebookShareLinkBox;
