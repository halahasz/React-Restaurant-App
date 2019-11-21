import React from 'react';
import AppContex from '../../context';
import List from '../../components/List/List';

class MenuPage extends React.Component {
  componentDidMount() {
    return this.context.setActiveType('menu');
  }

  render() {
    return <AppContex.Consumer>{context => <List items={context.menu} />}</AppContex.Consumer>;
  }
}

MenuPage.contextType = AppContex;

export default MenuPage;
