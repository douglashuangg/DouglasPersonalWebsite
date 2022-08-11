import React from 'react'; 
import Button from 'react-bootstrap/Button';

function Introduction() {
  return (
    <div className="introduction">
      {/*
      <img src={`${process.env.PUBLIC_URL}/images/dp.jpg`} id="douglas" alt="Douglas Huang"/> 
      */}
      <h1 className="mainHeader" style={{fontSize: "80px"}}>Douglas Huang</h1>
      <div style={{textAlign: "center"}}>
        <a href="https://www.linkedin.com/in/douglas-huang-b8b521209/" className="buttonMain">Linkedin </a>
        <a href="https://github.com/douglashuangg" className="buttonMain">Github </a>
        <a href="" className="buttonMain" >Resume</a>
      </div>
      <p style={{margin: "40px 0 0 0"}}>Hi, I'm Douglas. I'm a first year Mechanical Engineering Student at the University of Waterloo interested in machine learning and web development.</p>
        
  </div>
  )
}

export default Introduction