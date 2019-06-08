import React from "react";
import MenuItem from "./ListItem ";
import styles from "./List.module.scss";

const List = (props) => (
  <ul className={styles.wrapper}>
    {props.items.map(item => (
      <MenuItem key={item.title} {...item} />
    ))}
  </ul>
);

export default List;
