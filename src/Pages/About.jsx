import React from 'react'
import Mirror from '../Components/Mirror'
import SkillIcons from '../Components/SkillIcons'
import SkillModal from '../Components/SkillModal'
import TransitionTest from '../Components/TransitionTest'

const About = () => {
    return(
        <section className='about-main'>
        <p className='page-header'>About Me</p>
        <Mirror />
        <p className='about-text'>Hello! My name is Garrett, and I'm a full stack web developer and musician based in Seattle, WA. Originally from San Diego, CA - 
        I moved to Seattle for its thriving music and tech scene in 2008. When I'm not busy trying to hone my skills behind the computer or the drum set - you can usually 
        find me roaming around the cities many great cafes, book stores, and record shops. </p>
        {/* <TransitionTest /> */}
        {/* <SkillModal /> */}
        <SkillIcons />
        </section>
    )
}

export default About