import React from "react";
import Button from "react-bootstrap/Button";
import { useSpring, animated } from "react-spring";

function Introduction() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="introduction">
      {/*
      <img src={`${process.env.PUBLIC_URL}/images/dp.jpg`} id="douglas" alt="Douglas Huang"/> 
      */}
      <h1 className="mainHeader" style={{ fontSize: "80px" }}>
        Douglas Huang
      </h1>
      <h1 className="introduction-blurb">
        Hi, I'm Douglas. I'm a second year Mechanical Engineering student at the
        University of Waterloo. I'm interested in anything from microcontrollers
        to web development.
      </h1>
    </animated.div>
  );
}

export default Introduction;
