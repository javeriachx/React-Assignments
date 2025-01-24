    
import React from "react";
import Counter from "./Counter"; // Import the Counter component

export default function App() {
  return (
    <div style={styles.app}>
      <h1>Redux Toolkit Counter</h1>
      <Counter /> {/* Render the Counter component */}
    </div>
  );
}

const styles = {
  app: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
};
