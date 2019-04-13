import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithubSquare, faExternalLinkAlt, faLinkedin)

const ProjectIcons = (props) => {
    return(
        <div className='proj-icon-box'>
            <div className='project-link'>
                <a href={props.git}target="_blank"><FontAwesomeIcon className='proj-git-icon'icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/></a>
                <p>CODE</p>
            </div>
            <div className='project-link'>
                <a href={props.live}target="_blank"><FontAwesomeIcon className='proj-link-icon'icon={faExternalLinkAlt} size={'4x'} color={'#2A363B'} /></a>
                <p>LIVE</p>
            </div>
        </div>
    )
}

export default ProjectIcons