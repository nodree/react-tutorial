import React from "react";
import MainLayout from "../layouts/MainLayout";
import ContentMain from "../ContentMain.js";

class MainPage extends React.Component {
  render() {
    return(
      <MainLayout>
        <ContentMain/>
      </MainLayout>
    )
  }
}

export default MainPage;

