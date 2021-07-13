import React from "react";
import "../Components/Popup.css";
import CloseIcon from "@material-ui/icons/Close";
function Popup(props) {
  return props.trigger ? (
    <div className="popup d-flex text-center">
      <div className="popupInner">
        <CloseIcon
          className="closeBtn"
          onClick={() => props.setTrigger(false)}
        />
        {props.children}
      </div>
    </div>
  ) : (
    " "
  );
}

export default Popup;
