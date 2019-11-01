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
  initState = () => {
    const init = [
      {
        type: "menu",
        title: "ddd",
        price: "",
        image: "",
        ingredents: "",
        ingredients: "ddd"
      }
    ];
    const data = (() => {
      if (sessionStorage["menu"] != null) {
        return JSON.parse(sessionStorage["menu"]);
      } else {
        return init;
      }
    })();

    this.setState({ menu: data });
  };

  componentDidMount() {
    this.initState();
  }

  state = {
    menu: [],
    news: [],
    gallery: [],
    isModalOpen: false
  };

  addItem = (e, newItem) => {
    e.preventDefault();
    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));
    this.closeModal();
    if (newItem.type == "menu") {
      return (sessionStorage["menu"] = JSON.stringify([
        ...this.state["menu"],
        newItem
      ]));
    } else if (newItem.type == "news") {
      return (sessionStorage["news"] = JSON.stringify([
        ...this.state["news"],
        newItem
      ]));
    } else {
      return (sessionStorage["gallery"] = JSON.stringify([
        ...this.state["gallery"],
        newItem
      ]));
    }
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
