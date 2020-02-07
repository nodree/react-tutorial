import React from "react";
import HeaderTop from "../HeaderTop";
import FooterBottom from "../FooterBottom";

class MainLayout extends React.Component {
  render() {
    return(
      <div>
        <HeaderTop/>
        {this.props.children}
        <FooterBottom/>
      </div>
    )
  }
}

export default MainLayout;

