import { useState } from "react";

import { emojiDictionary } from "./EmojiDictionary";

import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header>
        <h1 className="heading">Emoji Interpreter</h1>
        <input
          type="text"
          placeholder="enter the emoji..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </header>

      <h1 className="emoji-meaning"></h1>
      <div className="emojis">
        {Object.keys(emojiDictionary).map((emoji) => (
          <span className="emoji">{emoji}</span>
        ))}
      </div>

      <footer>
        <p>Made using React.</p>
      </footer>
    </div>
  );
}
