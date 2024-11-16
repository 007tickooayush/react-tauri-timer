import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

const defaultTime = 3;
const leastTime = 0;
function App() {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(defaultTime);

  // useEffect(() => {
  //   setActive(false);
  //   setTime(defaultTime);
  // }, []);

  useEffect(() => {
    let timer;
    if(active && time > 0) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
    if(time === leastTime) {
      setActive(false);
    }

    console.log("Time: ", time, "Active: ", active);
    return () => {
      clearInterval(timer);
    };
  }, [active, time]);

  const handleTimeInit = (value) => {
    setTime(value);
  };

  const handleStart = () => {
    setActive(true);
  };

  const handleStop = () => {
    setActive(false);
  };

  const handleReset = () => {
    setTime(defaultTime);
    setActive(false);
  };

  return (
    <main className="container">
      <h1>Tauri App Mark1</h1>
      <div className="container">
        {
          !active &&
          <input 
            type="number" 
            onChange={(e) => handleTimeInit(Number(e.target.value))} 
            value={time} 
          />
        }
        <div className="row" style={{padding: 4, margin: 4}}>
          <button onClick={handleStart} style={{margin: 4}}>Start</button>
          <button onClick={handleStop} style={{margin: 4}}>Stop</button>
          <button onClick={handleReset} style={{margin: 4}}>Reset</button>
        </div>
      </div>
      <h2>
        {time}
      </h2>
    </main>
  );
}

export default App;