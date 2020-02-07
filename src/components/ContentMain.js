import React from "react";
import InputForm from "./InputForm";

class ContentMain extends React.Component {
  state = {
    name: "yudi"
  }

  changeName = data => {
    console.log("test")
    this.setState({
      name: data
    })
  }

  render() {
    return(
      <div>
        <h3>main page</h3>
        <p>{this.state.name}</p>
        <InputForm name={this.changeName}/>
      </div>
    )
  }
}

export default ContentMain;

