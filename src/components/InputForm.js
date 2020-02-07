import React from "react";
import ClickButton from "./ClickButton";

class InputForm extends React.Component{
  state = {
    title: ""
  }

  changes = e => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.title} onChange={this.changes}/>
        <ClickButton nama={this.props.name} title={this.state.title}/>
      </div>
    )
  }
}

export default InputForm;

