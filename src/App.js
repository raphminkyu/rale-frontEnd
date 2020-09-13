import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";
import WindowResize from "react-window-resize";
import NewWindow from "react-new-window";
import "./App.scss";
import TopicsChart from "./Components/TopicsChart";
import Questions from "./Components/Questions";
import WordChart from "./Components/WordChart";
import Wolfram from "./Components/Wolfram";
import LandingPage from "./Pages/LandingPage";
import Loading from "./Components/Loading";
const App = () => {
  const [landing, setLanding] = useState(true);
  const [loading, setLoading] = useState(true);
  const API = "KH3LRW-HUELER2TUL";
  const queryType = "simple";
  const url = `http://api.wolframalpha.com/v2/${queryType}?appid=${API}&input=population%20france&output=json`;
  useFirebaseConnect([
    {
      path: "results/current_session/-MH2geszKw0DHKchQT26/questions",
    },
    {
      path: "results/current_session/-MH2geszKw0DHKchQT26/topics",
    },
  ]);
  var questions;
  var topics;
  const results = useSelector((state) => state.firebase.ordered.results);
  if (isLoaded(results)) {
    questions = results.current_session["-MH2geszKw0DHKchQT26"].questions;
    topics = results.current_session["-MH2geszKw0DHKchQT26"].topics;
  }
  const handleStart = () => {
    setLanding(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const returnValue = landing ? (
    <LandingPage handleStart={handleStart} />
  ) : results && isLoaded(results) && !loading ? (
    <>
      {/* <NewWindow> */}
      <div className="App">
        <div className="container">
          {/*  <TopicsChart /> */}
          <WordChart topics={topics} />
          <Questions questions={questions} />
          <Wolfram />
        </div>
      </div>
      {/* </NewWindow> */}
    </>
  ) : (
    <Loading />
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
