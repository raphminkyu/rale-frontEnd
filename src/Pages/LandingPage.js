import React, { useEffect, useState, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
const LandingPage = ({ handleStart }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: "#2d92ff",
          color1: "#ffffff",
          birdSize: 1.5,
          speedLimit: 6.0,
          alignment: 39.0,
          cohesion: 29.0,
          quantity: 4.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef}>
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
    </div>
  );
};

export default LandingPage;
