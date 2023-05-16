import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpclick = () => {
    console.log("Upper Case was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!" ,"Success");
  };
  const handleLoclick = () => {
    console.log("Lower Case was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!" ,"Success");
  };
  const clearText = () => {
    console.log("Clear was Clicked");
    let newText = '';
    setText(newText);
    
  };
  const handleOnchange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy=()=>{
    console.log("Hi i am Handle Copy");
    var text=document.getElementById("myBox");
    text.select();
    //text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <div clasName="mb-3">
          <h1>{props.heading} </h1>
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',
        color:props.mode === 'dark'?'white':'black'}} id="myBox" onChange={handleOnchange} rows="8" ></textarea>
        </div>
        <br />
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>
          Convert to Upper Case
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          Hi above Paragraph has {text.split(" ").filter((element)=>{ return element.length!==0 }).length} Words and{" "}
          {text.length} Characters
        </p>
        <p>
          Minutes Required to read {text.split(" ").length} is{" "}
          {0.008 * text.split(" ").length}{" "}
        </p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the Textbox Above To Preview It Here"}</p>
      </div>
    </>
  );
}
