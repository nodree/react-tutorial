import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import BookFavorite from "./components/BookFavorite";

class App extends React.Component{
  state = {
    books: [
      {
        id: 1,
        name: "Chicken soups for the soul",
        image: require("./assets/soups.jpg"),
        description: "Chicken Soup for the Soul, the world’s favorite and most recognized storyteller, publishes the famous Chicken Soup for the Soul book series. With well over 100 million books sold to date in the U.S. and Canada alone, more than 250 titles, and translations into more than 40 languages, “chicken soup for the soul” is one of the world’s best-known phrases and is regularly referenced in pop culture.",
        author: "Jack Canfields",
        founded: 1993,
        language: "English"
      },
      {
        id: 2,
        name: "The Intilegent Investor",
        image: require("./assets/investor.jpg"),
        description: "This classic text is annotated to update Graham's timeless wisdom for today's market conditions.The greatest investment advisor of the twentieth century, Benjamin Graham, taught and inspired people worldwide. Graham's philosophy of which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949.",
        author: "Benjamin Graham",
        founded: 1949,
        language: "English"
      },
      {
        id: 3,
        name: "Think and Grow Rich",
        image: require("./assets/think.jpg"),
        description: "Think and Grow Rich has been called the Granddaddy of All Motivational Literature.It was the first book to boldly ask, What makes a winner? The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himself. The most famous of all teachers of success spent a fortune and the better part of a lifetime of effort to produce the Law of Success philosophy that forms",
        author: "Napoleon Hill",
        founded: 1937,
        language: "English"
      }
    ],
    favorites: []
  }

  addToFavorite = id => {
    for(let i = 0; i < this.state.favorites.length; i++) {
      if(this.state.favorites[i].id === id) {
        return false
      }
    }
    const data = this.state.books.find(item => item.id === id);
    this.setState({
      favorites: [...this.state.favorites, data]
    })
  }

  removeFromFavorite = id => {
    this.setState({
      favorites: this.state.favorites.filter(item => item.id !== id)
    })
  }

  render(){
    return(
      <React.Fragment>
        <div className="container">
          <BookList books={this.state.books} add={this.addToFavorite}/>
          <BookFavorite favorites={this.state.favorites} remove={this.removeFromFavorite}/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;

