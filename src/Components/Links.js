import React from 'react'; 
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Links() {
  return (
    <div>
      <a href="https://github.com/douglashuangg" target="_blank" className="icons" style={{padding: "30px 30px 0 10px"}}><FontAwesomeIcon icon={faGithub} /> </a>
      <a href="https://www.linkedin.com/in/douglas-huang-b8b521209/" target="_blank" className="icons"><FontAwesomeIcon icon={faLinkedin} /> </a>
        
    </div>
  )
}

export default Links