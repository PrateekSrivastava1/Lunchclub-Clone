import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import "./InviteMessageTextBox.css";
import SendIcon from "@material-ui/icons/Send";
function InviteMessageTextBox({ PastMatches }) {
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
      {/* if we receive props.PastMatches true then we will use PastMathesformId
         as ID because both pages have different size textbox, so in PastMatchesformID 
         we will increase width of box*/}
      <form
        id={PastMatches ? "PastMathesformId" : "formId"}
        className="create-note"
      >
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
          placeholder={
            PastMatches
              ? "+ Add Private Notes"
              : "✎ Write a message for your invites"
          }
          rows={expand ? 3 : 1}
        />
        {/* if we receive props.PastMatches true then 
           we will use "+ Add Private Notes" placeholder else "✎ Write a message for your invites"*/}
        <Fab>
          <SendIcon />
        </Fab>
      </form>
    </div>
  );
}

export default InviteMessageTextBox;
