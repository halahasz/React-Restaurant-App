import React from "react";
import "./index.css";
import AppContext from "./context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuPage from "./pages/MenuPage/MenuPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import soupImage from './assets/img/soup.jpg';
import friesImage from './assets/img/fries.jpg';
<<<<<<< HEAD
=======
import ravioliImage from './assets/img/ravioli.jpg';
>>>>>>> 38ba22c1d100e30e010238ed981b51e6cd5e1130

class App extends React.Component {
  initMenu = () => {
    const init = [
      {
        title: 'Creamy roasted beetroot soup with pear',
        price: '14zl',
        image: soupImage,
        ingredients: 'vegan cream, toasted pumpkin seeds'
      },
      {
        title: 'Herbal polenta fries',
        price: '12zl',
        image: friesImage,
        ingredients: 'mayo dip'
      },
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

  initNews = () => {
    const init = [
      {
        title: 'Creamy roasted beetroot soup with pear',
        price: '14zl',
        image: soupImage,
        ingredients: 'vegan cream, toasted pumpkin seeds'
      },
      {
        title: 'Herbal polenta fries',
        price: '12zl',
        image: friesImage,
        ingredients: 'mayo dip'
      },
    ];
    const data = (() => {
      if (sessionStorage["news"] != null) {
        return JSON.parse(sessionStorage["news"]);
      } else {
        return [];
      }
    })();

    this.setState({ news: data });
  };

  componentDidMount() {
    this.initMenu();
    this.initNews();
  }

  state = {
    menu: [],
    news: [],
    gallery: [],
    isModalOpen: false,
    activeType: ''
  };

  addItem = (e, newItem) => {
    e.preventDefault();
    this.setState(prevState => ({
      [this.state.activeType]: [...prevState[this.state.activeType], newItem]
    }));
    this.closeModal();
    if (this.state.activeType == "menu") {
      return (sessionStorage["menu"] = JSON.stringify([
        ...this.state["menu"],
        newItem
      ]));
    } else if (this.state.activeType == "news") {
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

  setActiveType = (type) => {
    this.setState({
      activeType: type
    });
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
      addItem: this.addItem,
      setActiveType: this.setActiveType
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
