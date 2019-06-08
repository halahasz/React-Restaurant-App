import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import FormRadio from "./FormRadio";
import AppContext from "../../context";

const types = {
  menu: "menu",
  news: "news",
  gallery: "gallery"
};

const descriptions = {
  menu: "menu item",
  news: "article",
  gallery: "image"
};

class Form extends React.Component {
  state = {
    type: types.menu,
    title: "",
    price: "",
    image: "",
    ingredents: ""
  };

  handleRadioButtonCHange = type => {
    this.setState({
      type: type
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { type } = this.state;
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <div className={styles.radioWrapper}>
                <FormRadio
                  id={types.menu}
                  checked={type === types.menu}
                  changeFn={() => this.handleRadioButtonCHange(types.menu)}
                >
                  Menu
                </FormRadio>
                <FormRadio
                  id={types.news}
                  checked={type === types.news}
                  changeFn={() => this.handleRadioButtonCHange(types.news)}
                >
                  News
                </FormRadio>
                <FormRadio
                  id={types.gallery}
                  checked={type === types.gallery}
                  changeFn={() => this.handleRadioButtonCHange(types.gallery)}
                >
                  Gallery
                </FormRadio>
              </div>

              <Input 
              value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                label="Title"
                maxLength={30}
              />
              {this.state.type === types.menu ? (
                <Input 
                value={this.state.price}
                  onChange={this.handleInputChange}
                  name="price"
                  label="Price"
                />
              ) : null}
              <Input 
              value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                label="Image"
              />
              {this.state.type !== types.gallery ? (
                <Input 
                value={this.state.ingredients}
                  onChange={this.handleInputChange}
                  tag="textarea"
                  name="ingredients"
                  label={type === types.menu ? "Ingredients" : "Text"}
                />
              ) : null}
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
