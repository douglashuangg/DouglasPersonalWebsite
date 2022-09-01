import React from 'react'

function Projects() {
  return (
    <div class="projects">
        <div class="work">
            <h2>Work Experiences</h2>
            <ul>
                <h3 class="projectTitle" style={{padding: "10px 0px"}}>
                  Incoming Software Developer @ Brock Solutions
                </h3>
                <h3 class="projectTitle">
                University of Waterloo, Centre for Extended Learning
                </h3>
                <li>
                Junior Application Developer, Jan 2022 - Apr 2022
                </li>
            </ul>
        </div>
        <h2>Projects</h2>
        <ul>
          <h3>
            FBI (Facts 'Bout Ingredients) | Python/Flask, ReactJS
          </h3>
          <li>
            A hackathon project that generates facts about ingredients in a nutrition label!
          </li>
          <h3>
            Renewable Percentage | Python
          </h3>
          <li>
            A twitter bot that tweets the percentage of energy generated renewably today compared to the same time last year in the USA.
          </li>
        </ul>

  </div>
  )
}

export default Projects