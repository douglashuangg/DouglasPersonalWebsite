import React from 'react'; 
import Button from 'react-bootstrap/Button';

function Introduction() {
  return (
    <div className="introduction">
      {/*
      <img src={`${process.env.PUBLIC_URL}/images/dp.jpg`} id="douglas" alt="Douglas Huang"/> 
      */}
      <h1 className="mainHeader" style={{fontSize: "80px"}}>Douglas Huang</h1>
      <p>Hi, I'm Douglas. I'm a second year Mechanical Engineering student at the University of Waterloo interested in machine learning and web development.</p>
  </div>
  )
}

export default Introduction