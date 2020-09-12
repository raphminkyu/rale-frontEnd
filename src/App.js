import React, { useEffect, useState } from "react";

import WindowResize from "react-window-resize";
import NewWindow from "react-new-window";
import "./App.scss";
import TopicsChart from "./Components/TopicsChart";
import Questions from "./Components/Questions";
import WordChart from "./Components/WordChart";
import Wolfram from "./Components/Wolfram";
const App = () => {
  const [wolframInput, setWolframInput] = useState("");
  const API = "KH3LRW-HUELER2TUL";
  const queryType = "simple";
  const url = `http://api.wolframalpha.com/v2/${queryType}?appid=${API}&input=population%20france&output=json`;
  const getClick = () => {
    fetch("http://localhost:5000/uploads/url")
      .then((res) => res.json())
      .then((res) => setWolframInput(res))
      .catch((e) => console.log(e));
  };

  return (
    <NewWindow>
      <div className="App">
        {/* <button onClick={getClick}>heyhey</button>
        <img src = {"http://api.wolframalpha.com/v2/simple?appid=KH3LRW-HUELER2TUL&input=5x5&output=json"}/> 
        */}
        <div className="container">
          {/*  <TopicsChart /> */}
          <WordChart />
          <Questions />
          <Wolfram />
        </div>
      </div>
    </NewWindow>
  );
};

export default App;
