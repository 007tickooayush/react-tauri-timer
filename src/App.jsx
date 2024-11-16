import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

const defaultTime = 3;

function App() {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(defaultTime);

  useEffect(() => {
    let timer;
    if(active && time > 0) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      });
    }
    return () => clearInterval(timer);
  }, [active, time]);

  return (
    <main class="container">
      <h1>Tauri App Mark1</h1>
    </main>
  );
}

export default App;
