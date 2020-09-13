import React, { useState } from "react";
import ReactTour from "reactour";

const Tour = () => {
  const steps = [
    {
      selector: "",
      content:
        "Welcome to Rale! Rale is a smart dashboard that enhances the learning experience by keeping track of key ideas and questions during lectures,as well as other useful information",
    },
    {
      selector: ".topics",
      content: "You will see the most recent topics mentioned here!",
    },
    {
      selector: ".questions-card",
      content:
        "Rale will record 5 most recent questions asked by people during the call, so don't worry if you space out.",
    },
    {
      selector: ".wolfram-card",
      content:
        "If you are looking for answers, ask Wolfram and you shall find what you're looking for.",
    },
    {
      selector: "#image-1",
      content: "Click on the image to expand it.",
    },
    {
      selector: "",
      content: () => (
        <>
          <p>We are excited to show you what Rale can do!</p>
          <button className="btn btn-primary" onClick={handleClose}>
            Finish Tour
          </button>
        </>
      ),
    },
  ];

  const [isOpen, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ReactTour
      steps={steps}
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
    />
  );
};

export default Tour;
