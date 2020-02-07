import React from "react";
import { Link } from "react-router-dom";
import "../assets/sass/HeaderTop.scss";

class HeaderTop extends React.Component {
  render() {
    return(
      <div className="nav-container">
        <div className="nav-container__brand">
          <h1>gitlab logo</h1>
        </div>
        <div className="nav-container__nav-link">
          <button className="nav-container__nav-link--primary">primary</button>
          <button className="nav-container__nav-link--secondary">secondary</button>
        </div>
      </div>
    )
  }
}


export default HeaderTop;

