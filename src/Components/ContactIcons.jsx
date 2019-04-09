import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faGit, faBootstrap, faHtml5, faJs, faLinkedin, faNode, faNpm, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

library.add(faDatabase, faExternalLinkAlt, faGithubSquare, faGit, faBootstrap, faHtml5, faJs, faLinkedin, faNode, faNpm, faPython, faReact)


const SkillIcons = (props) => {
    return(
        <div className='contact-icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faLinkedin} size={'4x'}  color={'#2A363B'}/>
        </div>

    )
}

export default SkillIcons