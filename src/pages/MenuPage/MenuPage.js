import React from 'react';
import AppContex from '../../context'
import List from "../../components/List/List"

const MenuPage = () => (
  <AppContex.Consumer>
    {(context) => (<List items={context.menu} />)}
  </AppContex.Consumer>
);

export default MenuPage;