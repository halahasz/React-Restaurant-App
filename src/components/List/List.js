import React from "react";
import MenuItem from "./ListItem ";
import styles from "./List.module.scss";

const List = items => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          <MenuItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
      <h2 className={styles.noItems}>There is nothing here yet, please add some items! &hearts;</h2>
    )}
  </>
);

export default List;
