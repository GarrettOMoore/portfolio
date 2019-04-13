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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est nemo vel rerum molestias fugit modi id, laudantium iure cupiditate aspernatur ducimus recusandae facilis similique sint quia odio quas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, a doloribus eligendi quis ad quod! Consequatur dignissimos eligendi numquam tempora recusandae provident vero accusantium expedita, sequi iusto voluptas, commodi libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquam repellendus quibusdam soluta repudiandae, laboriosam quos consequatur consectetur nemo molestiae illum, corporis voluptates nulla earum qui mollitia incidunt voluptas ipsam!</p>
        {/* <TransitionTest /> */}
        {/* <SkillModal /> */}
        <SkillIcons />
        </section>
    )
}

export default About