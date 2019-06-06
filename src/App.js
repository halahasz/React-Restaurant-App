import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

const initialStateItems = [
  {
    image:
      "http://veganic.restaurant/wp-content/uploads/2018/04/img_2086-1.jpg",
    name: "Ravioli with mashrooms",
    price: "28zl",
    ingredients:
      "boletus, oyster mushrooms, truffle paste, butternut squash, spinach, chanterelle"
  },
  {
    image:
      "http://veganic.restaurant/wp-content/uploads/2018/04/img_2086-1.jpg",
    price: "12zl",
    name: "Herbal polenta fries",
    ingredients: "mayo dip"
  },
  {
    image:
      "http://veganic.restaurant/wp-content/uploads/2018/04/img_2086-1.jpg",
    price: "14zl",
    name: "Creamy roasted beetroot soup with pear",
    ingredients: "vegan cream, toasted pumpkin seeds"
  }
];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: true
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
    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal} />
          <h1>Hello World!</h1>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/gallery" component={GalleryPage} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </>
      </BrowserRouter>
    );
  }
}

export default App;
