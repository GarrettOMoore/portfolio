import React from 'react'
import tumblin from '../Images/tumblin.png'
import record from '../Images/record-x_2.png'
import citizen from '../Images/citizenly-1.png'
import starbunker from '../Images/starbunker.png'
import ProjectIcons from './ProjectIcons'

const Projects = (props) => {
    return(
        <section className='projects-main'>
        <p className='page-header'>Projects</p>
        <img src={tumblin} className='project-pic' width={'500px'} height={'500px'}/>
        <ProjectIcons git={'https://github.com/GarrettOMoore/tumblin-game'} live={'https://garrettomoore.github.io/tumblin-game/'}/>
        <img src={record} className='project-pic' width={'500px'} height={'520px'} />
        <ProjectIcons git={'https://github.com/GarrettOMoore/record-exchange'} live={'https://mighty-sands-84315.herokuapp.com/users'}/>
        <img src={citizen} className='citizenly' width={'350px'} height={'620px'} />
        <ProjectIcons git={'https://github.com/GarrettOMoore/ga-wdi23-project-3'} live={'https://stark-meadow-11995.herokuapp.com/'}/>
        <img src={starbunker} className='citizenly'width={'350px'} height={'620px'}/>
        <ProjectIcons git={'https://github.com/GarrettOMoore/starbunker'} live={'https://blissful-williams-7d4519.netlify.com/'}/>
        </section>
    )
}

export default Projects