import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import AboutPage from "./components/pages/AboutPage";

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/about" component={AboutPage}/>
      </BrowserRouter>
    )
  }
}

export default App;
