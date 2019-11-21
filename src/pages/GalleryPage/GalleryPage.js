import React from 'react';
import AppContex from '../../context';
import List from '../../components/List/List';

class GalleryPage extends React.Component {
  componentDidMount() {
    return this.context.setActiveType('gallery');
  }

  render() {
    return <List activeType={this.props.activeType} items={this.context.gallery} />;
  }
}

GalleryPage.contextType = AppContex;

export default GalleryPage;
