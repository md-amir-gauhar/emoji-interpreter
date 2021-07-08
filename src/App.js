import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Emoji Interpreter</h1>
        <input
          type="text"
          placeholder="enter the emoji..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </header>
    </div>
  );
}
