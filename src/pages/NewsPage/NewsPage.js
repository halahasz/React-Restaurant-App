import React from 'react';
import AppContex from '../../context'
import List from "../../components/List/List"

const NewsPage = () => (
  <AppContex.Consumer>
    {(context) => (<List items={context.news} onMouseOver={() => {
            context.setActiveType("news");
          }}/>)}
  </AppContex.Consumer>
);

export default NewsPage;