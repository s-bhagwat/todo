import React from "react";
import styles from "./App.module.css";
import Input from "./Components/Input/Input";
import ToDoContainer from "./Components/ToDoContainer/ToDoContainer";
import { Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { selectTodoList } from "./features/todo/todoSlice";
import { setRemove } from "./features/todo/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  const [removed, setRemoved] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(setRemove());
    setRemoved(true);
  };
  return (
    <div
      className={styles.App}
      style={removed ? { gridTemplateColumns: "repeat(2, 1fr)" } : {}}
    >
      <div className={styles.app__container}>
        <Input />
        <ToDoContainer todoList={todoList} side="left" />
        <Button variant="outlined" color="error" onClick={handleRemove}>
          Remove Completed Tasks
        </Button>
      </div>
      {removed ? (
        <div className={styles.app__container}>
          <ToDoContainer todoList={todoList} side="right" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
