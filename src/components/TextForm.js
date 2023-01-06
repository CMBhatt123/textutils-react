import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpclick = () => {
    console.log("Uppercase was clicked" + text);

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="conatainer">
        <h1>{props.heading}</h1>
        <div>
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
        <div className="conatainer my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length}minutes to read.</p>
        </div>
      </div>
    </>
  );
}
