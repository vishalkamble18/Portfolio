import { useState } from "react";
import "./FileHandling.css";

export default function FileHandling() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function getWordCount(str) {
    return str.split(" ").filter(word => word !== "").length;
  }

  function handleUppercase(e) {
    e.preventDefault();
    setText(text.toUpperCase());
  }

  function handleLowercase(e) {
    e.preventDefault();
    setText(text.toLowerCase());
  }

  function handleWordCount(e) {
    e.preventDefault();
    setCount(getWordCount(text));
  }

  return (
    <div className="container">
      <h1>Text Converter</h1>

      <textarea
        placeholder="Enter your text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
      />

      <div className="button-group">
        <button className="upper" onClick={handleUppercase}>UPPERCASE</button>
        <button className="lower" onClick={handleLowercase}>lowercase</button>
        <button className="count" onClick={handleWordCount}>Word Count</button>
      </div>

      <div className="output">{text}</div>

      <div className="word-count">
        Word Count: {count}
      </div>
    </div>
  );
}
