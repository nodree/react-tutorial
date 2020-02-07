import React from "react";

const ClickButton = (props) => {
  return(
    <button onClick={() => props.nama(props.title)}>change name</button>
  )
}

export default ClickButton;

