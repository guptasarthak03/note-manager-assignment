import React from "react";
import "./Notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Notes(props) {
  const items = props.items;
  const NoteItems = items.map(item => {
    return (
      <div className="note" key={item.key}>
        <div className="header">
          <span class="note-close">
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </div>
        <div className="note-title">{item.title}</div>
        <div className="note-body">{item.text}</div>
      </div>
    );
  });
  return <div>{NoteItems}</div>;
}

export default Notes;
