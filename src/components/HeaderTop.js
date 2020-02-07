import React from "react";
import { Link } from "react-router-dom";

class HeaderTop extends React.Component {
  render() {
    return(
      <div style={head}>
        <div><h1>heading</h1></div>
        <div>
          <Link to="/">to home</Link>
          <Link to="/about">to about</Link>
        </div>
      </div>
    )
  }
}

const head = {
  display: "inline-block",
  top: "0"
}


export default HeaderTop;

