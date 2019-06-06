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
        <label className={styles.radio} htmlFor={types.menu}>
          <input
            id={types.menu}
            type="radio"
            checked={this.state.activeOption === types.menu}
            onChange={() => this.handleRadioButtonCHange(types.menu)}
          />
          <div className={styles.radioButton} />
          Menu</label>
          <label className={styles.radio}  htmlFor={types.news}>
          <input
            id={types.news}
            type="radio"
            checked={this.state.activeOption === types.news}
            onChange={() => this.handleRadioButtonCHange(types.news)}
          />
          <div className={styles.radioButton} />
          News</label>
          <label className={styles.radio} htmlFor={types.gallery}>
          <input
            id={types.gallery}
            type="radio"
            checked={this.state.activeOption === types.gallery}
            onChange={() => this.handleRadioButtonCHange(types.gallery)}
          />
          <div className={styles.radioButton} />
          Gallery</label>
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
