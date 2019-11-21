import React from 'react';
import AppContex from '../../context';
import List from '../../components/List/List';

class NewsPage extends React.Component {
  componentDidMount() {
    return this.context.setActiveType('news');
  }

  render() {
    return <List items={this.context.news} />;
  }
}

NewsPage.contextType = AppContex;

export default NewsPage;
