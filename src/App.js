import React from 'react';
import PhotoList from "./components/PhotoList.js";

class App extends React.Component {
  state = {
    photos: [],
    url: "https://jsonplaceholder.typicode.com/todos"
  }
  
  getAllPhoto = async (url) => {
    try {
      let res = await fetch(`${url}?_limit=10`);
      let data = await res.json();
      this.setState({ photos: data })
    } catch(err) {
      console.log(err)
    }
  }

  deleteTodos = async (id) => {
    try {
      let res = await fetch(`${this.state.url}/${id}`, { method: "DELETE" });
      await res.json();
      this.setState({
        photos: this.state.photos.filter(photo => photo.id !== id)
      })
    }catch(err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getAllPhoto(this.state.url)
  }

  render() {
    return(
      <div>
        <PhotoList lists={this.state.photos} del={this.deleteTodos}/>
      </div>
    )
  }
}

export default App;
