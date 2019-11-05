import React from "react";
import ListItem from "./ListItem ";
import styles from "./List.module.scss";

const List = ({items, ...props}) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          <ListItem key={item.title} {...item} {...props}/>
        ))}
      </ul>
    ) : (
      <h2 {...props} className={styles.noItems}>There is nothing here yet, please add some items! &hearts;</h2>
    )}
  </>
);

export default List;
