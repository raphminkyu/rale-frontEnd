import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";
import "./App.scss";
import Questions from "./Components/Questions";
import WordChart from "./Components/WordChart";
import Wolfram from "./Components/Wolfram";
import LandingPage from "./Pages/LandingPage";
import Loading from "./Components/Loading";
import Tour from "./Components/Tour";
const App = () => {
  const [landing, setLanding] = useState(true);
  const [loading, setLoading] = useState(true);
  const API = "KH3LRW-HUELER2TUL";
  const queryType = "simple";
  const url = `http://api.wolframalpha.com/v2/${queryType}?appid=${API}&input=population%20france&output=json`;
  useFirebaseConnect([
    {
      path: "results/current_session",
    },
  ]);
  var questions;
  var topics;
  const results = useSelector((state) => state.firebase.ordered.results);
  if (results && results.current_session && isLoaded(results)) {
    questions = results.current_session[0].value.questions;
    topics = results.current_session[0].value.topics;
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
      <div className="App">
        <div className="container">
          <WordChart topics={topics} />
          <Questions questions={questions} />
          <Wolfram />
        </div>
        <Tour />
      </div>
    </>
  ) : (
    <Loading />
  );

  return returnValue;
};
export default App;
