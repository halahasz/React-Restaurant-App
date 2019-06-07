import React from "react";
import "./index.css";
import AppContext from "./context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

class App extends React.Component {
  state = {
    items: {
      menu: [],
      news: [],
      gallery: []
    },
    isModalOpen: false
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      price: e.target[1].value,
      image: e.target[2].value,
      ingredients: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <h1>Hello World!</h1>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/gallery" component={GalleryPage} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
