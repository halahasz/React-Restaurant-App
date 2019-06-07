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
    const {activeOption} = this.state
    return (
      <div className={styles.wrapper}>
        <Title>Add new {descriptions[activeOption]}</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <div className={styles.radioWrapper}>
            <FormRadio
              id={types.menu}
              checked={activeOption === types.menu}
              changeFn={() => this.handleRadioButtonCHange(types.menu)}
            >
              Menu
            </FormRadio>
            <FormRadio
              id={types.news}
              checked={activeOption === types.news}
              changeFn={() => this.handleRadioButtonCHange(types.news)}
            >
              News
            </FormRadio>
            <FormRadio
              id={types.gallery}
              checked={activeOption === types.gallery}
              changeFn={() => this.handleRadioButtonCHange(types.gallery)}
            >
              Gallery
            </FormRadio>
          </div>

          <Input name="name" label="Title" maxLength={30} />
          {this.state.activeOption === types.menu ? <Input name="price" label="Price" /> : null}
          <Input name="image" label="Image" />
          {this.state.activeOption !== types.gallery ? <Input tag="textarea" name="ingredients" label={activeOption === types.menu ? "Ingredients" : "Text"} /> : null}
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
