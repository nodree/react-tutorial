import React from 'react';
import TodoList from "./components/TodoList";
import Axios from "axios";
import FormTodo from "./components/FormTodo";

class App extends React.Component {
  state = {
    todos: [],
    test : "test ldsjf"
  }

  /*getAllTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(res => this.setState({ todos: res }))
      .catch(err => console.log(err))
  }*/

  /*getAllTodos = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      let data = await res.json()
      this.setState({ todos: data })
    } catch(err) {
      console.log(err)
    }
  }*/

  getAllTodos = async () => {
    try {
      let res = await Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      this.setState({ todos: res.data })
    } catch(err) {
      console.log(err)
    }
  }

  addNewTodo = data => {
    this.setState({
      todos: [data, ...this.state.todos]
    })
  }

  componentDidMount() {
    this.getAllTodos()
  }

  render() {
    console.log(this.state.todos);
    return(
      <div>
        <FormTodo add={this.addNewTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
