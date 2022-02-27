import React from "react";
import styles from "./ToDoContainer.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoContainer({ todoList, side }) {
  return (
    <div className={styles.app__todoContainer}>
      {todoList.map((item) => {
        if (
          (!item.remove && side === "left") ||
          (item.remove && side === "right")
        ) {
          return (
            <ToDoItem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
              side={side}
            />
          );
        }
        return "";
      })}
    </div>
  );
}

export default ToDoContainer;
