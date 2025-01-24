import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value); // Access the counter value from the Redux store
  const dispatch = useDispatch(); // Create a dispatch function

  return (
    <div style={styles.counter}>
      <button onClick={() => dispatch(increment())} style={styles.button}>
        Increment
      </button>
      <span style={styles.count}>{count}</span>
      <button onClick={() => dispatch(decrement())} style={styles.button}>
        Decrement
      </button>
    </div>
  );
}

const styles = {
  counter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "200px",
    margin: "0 auto",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "1px solid transparent",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
  },
  count: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
};
