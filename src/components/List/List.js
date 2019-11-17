import React from "react";
import ListItem from "./ListItem ";
import "./List.scss";
import AppContex from "../../context";

const List = ({ items, activeType, ...props }) => (
  <>
    {items.length ? (
      <ul className={ "wrapper wrapper__" +activeType}>
        {items.map((item) => {
          return (
            <AppContex.Consumer>
              {(context) => (
                <ListItem
                  key={item.title}
                  activeClass={context.activeType}
                  {...item}
                  {...props}
                />
              )}
            </AppContex.Consumer>
          );
        })}
      </ul>
    ) : (
      <h2 {...props} className= "noItems" >
        There is nothing here yet, please add some items! &hearts;
      </h2>
    )}
  </>
);

export default List;
