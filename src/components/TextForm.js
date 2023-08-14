import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleclick = () => {
    console.log("UPPERCASE was clicked" + text);
    let newtext = text.toUpperCase();
    SetText(newtext);
    props.Showalert("Converted to UPPERCASE", "success");
  };
  const handlelowclick = () => {
    console.log("UPPERCASE was clicked" + text);
    let newtext = text.toLowerCase();
    SetText(newtext);
    props.Showalert("Converted to lowercase", "success");
  };
  const handleonchange = (event) => {
    console.log("onchange was clicked");
    SetText(event.target.value);
  };
  const Reset = () => {
    let newtext = "";
    SetText(newtext);
    props.Showalert("Your Text has been Reseted", "success");
  };

  const [text, SetText] = useState("");
  // SetText("new text");

  const replaceString = () => {
    let repval = prompt("Enter the word to be replaced:");
    let tobereplaced = new RegExp(repval, "g");

    let toreplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(tobereplaced, toreplace);
    SetText(newText);
    props.Showalert("Your Text Has Been Replaced", "success");
  };

  const textToSpeech = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.Showalert("Converting text into Speech", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.Showalert("Copied!! to the Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newtext = text.replace(/\s+/g, " ").trim();
    SetText(newtext);
    props.Showalert("Extra Spaces Have Been Removed!!", "success");
  };
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "#82e99c" : "black" }}>
        <div className="mb-3" >
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode === "dark" ? "#222020" : "white", color: props.mode === "dark" ? "white" : "black", border:props.mode ==="dark"?"solid 2px white":"solid 2px black" }}
            id="Mybox"
            value={text}
            onChange={handleonchange}
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1  my-2"
          style={{
            backgroundColor: props.mode === "dark" ? "#222020" : "black",
          }}
          onClick={handleclick}
        >
          Convert To UPPERCASE
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={Reset}
          style={{
            backgroundColor: props.mode === "dark" ? "#222020" : "black",
          }}
        >
          Click to rest
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handlelowclick}
          style={{
            backgroundColor: props.mode === "dark" ? "#222020" : "black",
          }}
        >
          Convert To lowercase
        </button>
        <button
          className="btn btn-primary mx-1  my-2"
          onClick={replaceString}
          style={{
            backgroundColor: props.mode === "dark" ? "#222020" : "black",
          }}
        >
          Replace Words
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={textToSpeech}
          style={{
            backgroundColor: props.mode === "dark" ? "#222020" : "black",
          }}
        >
          Text to Speech
        </button>
        <button
          className="btn btn-primary mx-1 my-2 "
          onClick={copyText}
          style={{
            backgroundColor: props.mode === "dark" ? "#222020" : "black",
          }}
        >
          Copy
        </button>
        <button
          className="btn btn-primary mx-1 my-2 "
          onClick={handleExtraSpaces}
          style={{
            backgroundColor: props.mode === "dark" ? "#222020" : "black",
          }}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "#82e99c" : "black" }}
      >
        <h2>Your Text Summary</h2>
        {/* <p>{text.split(" ").length}words and {text.length} Charcaters </p> */}
        <p>You can read the text in {0.08*text.split(" ").length} Minutes</p>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter Something above to preview it here"}
        </p>
      </div>
    </>
  );
}
