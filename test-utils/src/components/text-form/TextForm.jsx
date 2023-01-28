import React from "react";
import { useState } from "react";

const TextForm = ({ header }) => {
  const [text, setText] = useState("");
  const [lower, setLower] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = (e) => {
    const newText = text.toUpperCase();
    setText(newText);
    setLower(!lower);
  };

  const handleLowerCase = (e) => {
    const newText = text.toLowerCase();
    setText(newText);
    setLower(!lower);
  };

  const handleClear = () => {
    const newText = "";
    setText(newText);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h3>{header}</h3>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            name="text"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        {lower ? (
          <button className="btn btn-primary" onClick={handleLowerCase}>
            Convert to LowerCase
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleUpperCase}>
            Convert to UpperCase
          </button>
        )}
        <button className="btn btn-success mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="container my-4">
        <h3>Your Text Summary🌦️</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
