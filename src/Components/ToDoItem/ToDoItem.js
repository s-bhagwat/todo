import React from "react";
import styles from "./ToDoItem.module.css";
import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { setCheck } from "../../features/todo/todoSlice";

function ToDoItem({ name, done, id, side }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className={done ? styles.todoItem_d : styles.todoItem_p}>
      {side === "left" ? (
        <Checkbox
          checked={done}
          color="primary"
          onChange={handleCheck}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      ) : (
        ""
      )}
      <p
        className={done ? styles.todoItem__done : styles.todoItem__pending}
        style={side === "right" ? { marginLeft: "2.4em" } : {}}
      >
        {name}
      </p>
    </div>
  );
}

export default ToDoItem;
