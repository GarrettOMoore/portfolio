import React from 'react'
import tumblin from '../Images/tumblin.png'
import record from '../Images/record-x.png'
import citizen from '../Images/citizenly-1.png'
import starbunker from '../Images/starbunker.png'

const Projects = (props) => {
    return(
        <section className='projects-main'>
        <p className='page-header'>Projects</p>
        <img src={tumblin} className='project-pic' width={'500px'} height={'500px'}/>
        <p>Brief description of project here >></p>
        <p>GIT ICON // TECH ICONS // LIVE DEMO LINK</p>
        <img src={record} className='project-pic' width={'500px'} height={'500px'} />
        <p>Brief description of project here >></p>
        <p>GIT ICON // TECH ICONS // LIVE DEMO LINK</p>
        <img src={citizen} className='citizenly' width={'350px'} height={'620px'} />
        <p>Brief description of project here >></p>
        <p>GIT ICON // TECH ICONS // LIVE DEMO LINK</p>
        <img src={starbunker} className='citizenly'width={'350px'} height={'620px'}/>
        <p>Brief description of project here >></p>
        <p>GIT ICON // TECH ICONS // LIVE DEMO LINK</p>
        </section>
    )
}

export default Projects