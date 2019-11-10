import React from "react";
import AppContex from "../../context";
import List from "../../components/List/List";

class MenuPage extends React.Component {
  
  render() {
    return (
    <AppContex.Consumer>
      {context => (
        <List
          items={context.menu}
          onMouseOver={() => {
            context.setActiveType("menu");
          }}
        />
      )}
    </AppContex.Consumer>
    );
  }
}

export default MenuPage;
