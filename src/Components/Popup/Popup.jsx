import React from "react";
import "./Popup.css";
import { Link } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
function Popup(props) {
  return props.trigger ? (
    <div className="popup d-flex text-center">
      <div className="popupInner">
        <Link to="/Invite">
          <CloseIcon
            className="closeBtn"
            onClick={() => props.setTrigger(false)}
          />
        </Link>
        {props.children} 
      </div>
    </div>
  ) : ( 
    " " 
  );
}

export default Popup;
