import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";

const Questions = ({ questions }) => {
  return (
    <>
      <div className="card questions-card">
        <ul className="card-body questions list-group scroll-down">
          {questions
            ? questions.map((question, index) => {
                if (index === 0) {
                  return (
                    <li className="active list-group-item ">
                      {question.question}
                    </li>
                  );
                } else {
                  return <li>{question.question}</li>;
                }
              })
            : null}
        </ul>
      </div>
    </>
  );
};

export default Questions;
