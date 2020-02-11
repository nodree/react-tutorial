import React from "react";

class FormTodo extends React.Component{
  state = {
    title: ""
  }

  change = e  => {
    this.setState({
      title: e.target.value
    })
  }

  postTodo = async(e) => {
    e.preventDefault()
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({ title: this.state.title })
      })
      console.log(res)
      let data = await res.json()
      console.log(data)
      this.props.add(data)
    }catch(err) {
      console.log(err)
    }
  }

  render() {
    return(
      <form onSubmit={this.postTodo}>
        <input type="text" value={this.state.title} onChange={this.change}/>
        <button>add</button>
      </form>
    )
  }
}

export default FormTodo;

