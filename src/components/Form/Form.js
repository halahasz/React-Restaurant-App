import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
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

  setType = type => {
    this.setState({
      type: type
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { type } = this.state;
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[context.activeType]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={e => {
                this.setType(context.activeType);
                context.addItem(e, this.state);
              }}
            >
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                required
                name="title"
                label="Title*"
              />
              {context.activeType === types.menu ? (
                <Input
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  name="price"
                  required
                  label="Price*"
                />
              ) : null}
              {context.activeType === types.gallery ? (
                <Input
                  value={this.state.image}
                  onChange={this.handleInputChange}
                  // pattern="(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)"
                  type="url"
                  required
                  name="image"
                  label="Image*"
                />
              ) : (
                <Input
                  value={this.state.image}
                  onChange={this.handleInputChange}
                  // pattern="(http(s?):)([/|.|\w|\s|-])*\.(?:jp(e?)g|gif|png)"
                  type="url"
                  name="image"
                  label="Image"
                />
              )}

              {context.activeType !== types.gallery &&
              context.activeType === types.news ? (
                <Input
                  value={this.state.ingredients}
                  onChange={this.handleInputChange}
                  tag="textarea"
                  required
                  name="ingredients"
                  label="Text*"
                  type={this.state.type}
                />
              ) : null}

              {(context.activeType !== types.gallery && context.activeType) ===
              types.menu ? (
                <Input
                  value={this.state.ingredients}
                  onChange={this.handleInputChange}
                  tag="textarea"
                  name="ingredients"
                  label="Ingredients"
                  type={this.state.type}
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
