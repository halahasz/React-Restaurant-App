import React from "react";
import "./index.css";
import AppContext from "./context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuPage from "./pages/MenuPage/MenuPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

class App extends React.Component {
  
  state = {
    menu: [],
    news: [JSON.parse(sessionStorage.getItem('key0'))],
    // news: [],
    gallery: [],
    isModalOpen: false,
    counter: 0
  };

  addItem = (e, newItem) => {
    e.preventDefault();
    sessionStorage.setItem('key' + Math.random().toString(36).substring(10), JSON.stringify(newItem));
    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    })) 

    this.closeModal();
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
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={MenuPage} />
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
