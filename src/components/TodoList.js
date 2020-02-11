import React from "react";

const TodoList = props => {
  const lists = props.todos.map(list => <div key={list.id}>{list.title}</div>);
  return(
    <div>
      <h1>list all todos</h1>
      {lists}
    </div>
  )
}

export default TodoList;

