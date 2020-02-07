import React from "react";

class FooterBottom extends React.Component {
  render() {
    return(
      <div style={foot}>
        <h4>footer</h4>
      </div>
    )
  }
}

const foot = {
  display: "inline-block",
  bottom: "0"
}

export default FooterBottom;

