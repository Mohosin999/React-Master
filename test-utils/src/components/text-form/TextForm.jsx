import React from "react";
import { useState } from "react";

const TextForm = ({ header }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  return (
    <div>
      <div className="mb-3">
        <h3>{header}</h3>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Convert to Uppercase
      </button>
    </div>
  );
};

export default TextForm;
