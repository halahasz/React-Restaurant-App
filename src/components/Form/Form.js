import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

const types = {
  menu: "menu",
  news: "news",
  gallery: "gallery"
};

const descriptions = {
  menu: 'menu item',
  news: 'article',
  gallery: 'image'
}

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
          <input
            id={types.menu}
            type="radio"
            checked={this.state.activeOption === types.menu}
            onChange={() => this.handleRadioButtonCHange(types.menu)}
          />
          <label htmlFor={types.menu}>Menu</label>
          <input
            id={types.news}
            type="radio"
            checked={this.state.activeOption === types.news}
            onChange={() => this.handleRadioButtonCHange(types.news)}
          />
          <label htmlFor={types.news}>News</label>
          <input
            id={types.gallery}
            type="radio"
            checked={this.state.activeOption === types.gallery}
            onChange={() => this.handleRadioButtonCHange(types.gallery)}
          />
          <label htmlFor={types.gallery}>Gallery</label>
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
