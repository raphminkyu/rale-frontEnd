import React from "react";

const LandingPage = ({ handleStart }) => {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="heading-description mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Super doooper app</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            Suuuuuper dooooooper apppppp
          </h2>
          <button
            onClick={handleStart}
            className="btn btn-primary js-scroll-trigger"
          >
            Start
          </button>
        </div>
      </div>
    </header>
  );
};

export default LandingPage;
