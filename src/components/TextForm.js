import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpclick = () => {
    console.log("Uppercase was clicked" + text);

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label for="mybox" className="form-label"></label>
        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        Convert to uppercase
      </button>
    </div>
  );
}
