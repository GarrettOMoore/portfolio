import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faInstagram, faTwitter)


const SkillIcons = (props) => {
    return(
        <div className='contact-icon-box'>
            <a href="https://www.linkedin.com/in/r-garrett-moore/"target="_blank"><FontAwesomeIcon className='contact-icon'icon={faLinkedin} size={'4x'}  color={'#2A363B'}/></a>
            <a href="https://www.instagram.com/garrettmoore/"target="_blank"><FontAwesomeIcon className='contact-icon'icon={faInstagram} size={'4x'}  color={'#2A363B'}/></a>
            <a href="https://twitter.com/GarrettOMoore1?lang=en"target="_blank"><FontAwesomeIcon className='contact-icon'icon={faTwitter} size={'4x'}  color={'#2A363B'}/></a>
        </div>

    )
}

export default SkillIcons