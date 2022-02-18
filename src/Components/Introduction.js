import React from 'react'; 

function Introduction() {
  return (
    <div className="introduction">
      <img src={`${process.env.PUBLIC_URL}/images/dp.jpg`} id="douglas" alt="Douglas Huang"/> 
      <h1>Douglas Huang</h1>
 
      <a href="https://www.linkedin.com/in/douglas-huang-b8b521209/">Linkedin </a>
      <a href="https://github.com/douglashuangg">Github </a>
      <a href="">Resume</a>

      <p>Hi, I'm Douglas. I am a first year Mechanical Engineering Student at the University of Waterloo interested in Machine Learning and web development.</p>
        
  </div>
  )
}

export default Introduction