import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import FormRadio from "./FormRadio";

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
    activeOption: types.menu
  };

  handleRadioButtonCHange = type => {
    this.setState({
      activeOption: type
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Add new {descriptions[this.state.activeOption]}</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <div className={styles.radioWrapper}>
            <FormRadio
              id={types.menu}
              checked={this.state.activeOption === types.menu}
              changeFn={() => this.handleRadioButtonCHange(types.menu)}
            >
              Menu
            </FormRadio>
            <FormRadio
              id={types.news}
              checked={this.state.activeOption === types.news}
              changeFn={() => this.handleRadioButtonCHange(types.news)}
            >
              News
            </FormRadio>
            <FormRadio
              id={types.gallery}
              checked={this.state.activeOption === types.gallery}
              changeFn={() => this.handleRadioButtonCHange(types.gallery)}
            >
              Gallery
            </FormRadio>
          </div>
          <Input name="name" label="Name" maxLength={30} />
          <Input name="price" label="Price" />
          <Input name="image" label="Image" />
          <Input tag="textarea" name="ingredients" label="Ingredients" />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
