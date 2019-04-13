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
        <p className='project-header'>Record Exchange</p>
        <img src={record} className='project-pic' width={'570px'} height={'570px'} />
        <p>Utilizing the Discogs API, Record Exchange is a place for users to track their record collection, as well as foster trade and conversation about the music they love. Built in Express with a mySQL backend.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/record-exchange'} live={'https://mighty-sands-84315.herokuapp.com/users'}/>
        <p className='project-header'>Tumblin'</p>
        <img src={tumblin} className='project-pic' width={'570px'} height={'570px'}/>
        <p>Created using HTML5 Canvas & JavaScript - this is the evidence of a crash course in HTML5 Canvas. You are a tumbleweed - no mission, no purpose. Evading foes of no known origin, you have no choice - but to keep tumblin'...</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/tumblin-game'} live={'https://garrettomoore.github.io/tumblin-game/'}/>
        <p className='project-header'>Citizenly</p>
        <img src={citizen} className='citizenly' width={'350px'} height={'620px'} />
        <p>A collaborative project with Carlo Bruno, Hannah Erickson, and Charles Yun. Built in React, with a MongoDB backend - Citizenly is an app for those trying become more involved in US politics.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/ga-wdi23-project-3'} live={'https://stark-meadow-11995.herokuapp.com/'}/>
        <p className='project-header'>Starbunker (24hr Hackathon)</p>
        <img src={starbunker} className='citizenly'width={'350px'} height={'620px'}/>
        <p>Winner of General Assembly Seattle's April 2019 Hackathon. I was paired with two UX Designers (Ling Ramos, and Alana Vaccaro) and one fellow developer (Michael Cowan) to come up with an app to aid the dwindling survivors of a robot apocalypse.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/starbunker'} live={'https://blissful-williams-7d4519.netlify.com/'}/>
        </section>
    )
}

export default Projects