import React from "react";
import "../styles/BookList.css";

const BookList = (props) => {
  const product = props.books.map(item => 
    <div className="card-book" key={item.id}>
      <img src={item.image} alt={item.name} className="book-image"/>
      <div className="book-detail">
        <h3>{item.name}</h3>
        <div className="book-detail__description">
          <h4>Description</h4>
          <p>{item.description}</p>
        </div>
        <div className="boot-detail__product">
          <h4>Book Details</h4>
          <p>Author : {item.author} </p>
          <p>Founded : {item.founded} </p>
        </div>
        <button onClick={() => props.add(item.id)}>add to favorite</button>
      </div>
    </div>
  )
  console.log(props)
  return(
    <div className="product-container">
      <h2>List Book</h2>
      {product}
    </div>
  )
}

export default BookList;

