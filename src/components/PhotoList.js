import React from "react";

const PhotoList = props => {
  const photos = props.lists.map(todo => 
    <div key={todo.id}>
      {todo.title}
      <button onClick={() => props.del(todo.id)}>delete</button>
    </div>   
  )

  return(
    <div>
      <h1>Todos Gallery</h1>
      {photos}
    </div>
  )
}

export default PhotoList;

