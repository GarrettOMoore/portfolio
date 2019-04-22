import React from 'react'
import tumblin from '../Images/tumblin.png'
import record from '../Images/record-x_2.png'
import citizen from '../Images/citizenly-1.png'
import starbunker from '../Images/starbunker.png'
import ProjectIcons from '../Components/ProjectIcons'
import crema from '../Images/crema-about-mobile.png'

const Projects = (props) => {
    return(
        <>
        <p className='page-header'>Projects</p>
        <section className='projects-main'>
        <p className='project-header'>Crema</p>
        <img src={crema} className='project-pic' width={'190px'} height={'350px'} />
        <p>An app for coffee enthusiasts who want not only the best brewing methods, but a little information on coffee production, where to find the best local roasters, and of course - some curated music to compliment their favorite roasts. Made with MongoDB, Express, React, and Node.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/crema'} live={'https://immense-eyrie-19386.herokuapp.com/'}/>
        <p className='project-header'>Record Exchange</p>
        <img src={record} className='project-pic-sqr' width={'285px'} height={'285px'} />
        <p>Utilizing the Discogs API, Record Exchange is a place for users to track their record collection, as well as foster trade and conversation about the music they love. Built in Express with a mySQL backend.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/record-exchange'} live={'https://mighty-sands-84315.herokuapp.com/'}/>
        <p className='project-header'>Tumblin'</p>
        <img src={tumblin} className='project-pic-sqr' width={'285px'} height={'285px'}/>
        <p>Evidence of my crash course in HTML5 Canvas. You are a tumbleweed - no mission, no purpose. Evading foes of no known origin, you have no choice - but to keep tumblin'...</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/tumblin-game'} live={'https://garrettomoore.github.io/tumblin-game/'}/>
        <p className='project-header'>Citizenly</p>
        <img src={citizen} className='project-pic' width={'190px'} height={'350px'} />
        <p>Collaborative project with three developers. Built in React, with a MongoDB backend - Citizenly is an app for those trying become more involved in US politics.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/ga-wdi23-project-3'} live={'https://stark-meadow-11995.herokuapp.com/'}/>
        <p className='project-header'>Starbunker (24hr Hackathon)</p>
        <img src={starbunker} className='project-pic'width={'190px'} height={'350px'}/>
        <p>Winner of General Assembly Seattle's April 2019 Hackathon. I wss paired with two UX designers to come up with an app to aid the dwindling survivors of a robot apocalypse.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/starbunker'} live={'https://blissful-williams-7d4519.netlify.com/'}/>
        </section>
        </>
    )
}

export default Projects