import React from "react";
import "./InstagramShareLinkBox.css";

function TwitterShareLinkBox({Link}) {
  return (
    <div>
      <textarea className=" info socialShareLinkBox">
        {Link}
      </textarea> 
    </div>
  );
}

export default TwitterShareLinkBox;
