import React, { useState } from "react";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./InviteMessageTextBox.css";
import SendIcon from '@material-ui/icons/Send';
function InviteMessageTextBox() {
  const [list, setList] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  function Expanding() {
    setExpand(!expand);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setList((prevList) => {
      return {
        ...prevList,
        [name]: value,
      };
    });
  }
  return (
    <div>
        <form id="formId" className="create-note">
          {expand ? (
            <input
              className="noteInput"
              name="The note below will be sent to all your invites."
              type="text"
              value={list.title}
              placeholder="The note below will be sent to all your invites."
              onChange={handleChange}
              onClick={Expanding}
              value={list.title}
              disabled
            />
          ) : null}
          <textarea
            name="content"
            onClick={Expanding}
            onChange={handleChange}
            value={list.content}
            placeholder="✎ Write a message for your invites"
            rows={expand ? 3 : 1}
          />
          <Fab>
            <SendIcon />
          </Fab>
        </form>
    </div>
  );
}

export default InviteMessageTextBox;
