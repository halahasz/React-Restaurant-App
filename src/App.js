import React from "react";
import MenuWrapper from "./components/ListWrapper/MenuWrapper";
import "./index.css";
import Form from "./components/Form/Form";

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
    items: [...initialStateItems]
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value,
      ingredients: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <div className="App">
        <MenuWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
