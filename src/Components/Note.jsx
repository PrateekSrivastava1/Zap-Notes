import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import notes from "../notes";

function Note(props) {

  function handleClick()
  {
    props.onDelete(props.id);
  }  

  return<div className = "note">
      <p>{props.key}</p>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} ><DeleteOutlineIcon /></button>
  </div>
}

export default Note;