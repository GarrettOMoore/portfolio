import React from 'react'
import tumblin from '../Images/tumblin.png'
import record from '../Images/record-x_2.png'
import citizen from '../Images/citizenly-1.png'
import starbunker from '../Images/starbunker.png'
import ContactIcons from './ContactIcons'

const Projects = (props) => {
    return(
        <section className='projects-main'>
        <p className='page-header'>Projects</p>
        <img src={tumblin} className='project-pic' width={'500px'} height={'500px'}/>
        <ContactIcons />
        <img src={record} className='project-pic' width={'500px'} height={'520px'} />
        <ContactIcons />
        <img src={citizen} className='citizenly' width={'350px'} height={'620px'} />
        <ContactIcons />
        <img src={starbunker} className='citizenly'width={'350px'} height={'620px'}/>
        <ContactIcons />
        </section>
    )
}

export default Projects