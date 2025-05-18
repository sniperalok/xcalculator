import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        if (!input.trim()) {
          setResult("Error");
          return;
        }

        const output = eval(input); // Use with caution
        if (isNaN(output)) {
          setResult("NaN");
        } else if (!isFinite(output)) {
          setResult("Infinity");
        } else {
          setResult(output);
        }
      } catch (e) {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/"
  ];

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button key={idx} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;