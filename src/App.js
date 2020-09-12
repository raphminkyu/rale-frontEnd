import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import WindowResize from "react-window-resize";
import NewWindow from "react-new-window";
import "./App.scss";
import TopicsChart from "./Components/TopicsChart";
import Questions from "./Components/Questions";
import WordChart from "./Components/WordChart";
import Wolfram from "./Components/Wolfram";
import LandingPage from "./Pages/LandingPage";
const App = () => {
  const [landing, setLanding] = useState(true);
  const API = "KH3LRW-HUELER2TUL";
  const queryType = "simple";
  const url = `http://api.wolframalpha.com/v2/${queryType}?appid=${API}&input=population%20france&output=json`;

  useFirebaseConnect([
    {
      path: "users",
    },
  ]);

  const user = useSelector((state) => state.firebase.ordered.users);

  const handleStart = () => {
    setLanding(false);
  };
  const returnValue = landing ? (
    <LandingPage handleStart={handleStart} />
  ) : (
    <>
      <LandingPage handleStart={handleStart} />
      <NewWindow>
        <div className="App">
          <div className="container">
            {/*  <TopicsChart /> */}
            <WordChart />
            <Questions />
            <Wolfram />
          </div>
        </div>
      </NewWindow>
    </>
  );

  return returnValue;
  /**)}
  console.log(user);
  return (
    /
  );
};*/
};
export default App;
