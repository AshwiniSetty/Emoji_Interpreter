import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "Smiling",
  "😉": "Winking",
  "🥰": "Loved",
  "😘": "Kissing",
  "😠": "Angry",
  "👻": "Ghost",
  "😫": "Tired",
  "🙁": "Sad",
  "🥺": "Pleading",
  "😭": "Crying",
  "👽": "Alien",
  "🤖": "Robot",
  "❤️": "Heart",
  "😂": "Laugh",
  "😐": "Neutral"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database";
    }
    setMeaning(meaning); //React call to show output
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //React call to show output
  }

  return (
    <div className="App">
      <h1 className="h1">The Emoji Interpreter</h1>
      <h2>Enter an Emoji</h2>
      <input placeholder="Enter an Emoji" onChange={emojiInputHandler}></input>
      <h1 className="meaning">{meaning}</h1>

      <h2>Choose an Emoji</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
