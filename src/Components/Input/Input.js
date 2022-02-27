import React, { useState, useRef } from "react";
import styles from "./Input.module.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todo/todoSlice";
import Alert from "@material-ui/lab/Alert";

function Input() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const btn = useRef(null);

  const dispatch = useDispatch();

  const addTodo = () => {
    if (input.length < 5) {
      setError(true);
      return;
    } else if (error) {
      setError(false);
    }
    console.log(`[Adding ${input}]`);
    setInput("");
    dispatch(
      saveTodo({
        item: input,
        done: false,
        remove: false,
        id: Date.now(),
      })
    );
  };

  const handleInput = (e) => {
    //console.log(`[pressing key : ] ${e.charCode}`);
    if (e.charCode === 13) {
      btn.current.click();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (input.length >= 4) setError(false);
  };

  return (
    <>
      <div className={styles.input}>
        <input
          type="text"
          className={styles.text}
          value={input}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleInput(e)}
        />
        <button ref={btn} className={styles.button} onClick={addTodo}>
          Add!
        </button>
      </div>
      {/* <p className={error ? styles.error : styles.no__error}>
        Please enter tasks with 5 or more letters!
      </p> */}
      {error ? (
        <Alert className={styles.error} severity="error">
          Please enter tasks with 5 or more letters!
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}

export default Input;
