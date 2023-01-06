import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}-{text}</h1>
        <label for="mybox" className="form-label"></label>
        <textarea className="form-control my-3" id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary">Convert to uppercase</button>
    </div>
  );
}
