import React from 'react';
import AppContex from '../../context'
import List from "../../components/List/List"

const GalleryPage = () => (
  <AppContex.Consumer>
    {(context) => (<List items={context.gallery} onMouseOver={() => {
            context.setActiveType("gallery");
          }}/>)}
  </AppContex.Consumer>
);

export default GalleryPage;