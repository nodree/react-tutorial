import React from "react";
import "../styles/BookFavorite.css";

const BookFavorite = (props) => {
  let lists = props.favorites.map(item =>
    <div className="favorite-card" key={item.id}>
      <img src={item.image} alt={item.name} className="favorite-image"/>
      <div className="favorite-detail">
        <h4>{item.name}</h4>
        <p>By : {item.author}</p>
        <button onClick={() => props.remove(item.id)}>remove from favorite</button>
      </div>
    </div>
  )
  return(
    <div className="favorite-container">
      <h2>My Favorite Books</h2>
      {lists}
    </div>
  )
}

export default BookFavorite;

