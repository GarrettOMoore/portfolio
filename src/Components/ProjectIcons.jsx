import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

// const git = findIconDefinition({ prefix: 'fa', iconName: 'Github' })
// const linked = findIconDefinition({ prefix: 'fas', iconName: 'linkedIn'})

library.add(faGithubSquare, faExternalLinkAlt, faLinkedin)


const ProjectIcons = (props) => {
    return(
        <div className='proj-icon-box'>
        <div className='project-link'>
        <a href={props.git}><FontAwesomeIcon className='proj-git-icon'icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/></a>
        <p>CODE</p>
        </div>
        <div className='project-link'>
        <a href={props.live}><FontAwesomeIcon className='proj-link-icon'icon={faExternalLinkAlt} size={'4x'} color={'#2A363B'} /></a>
        <p>LIVE</p>
        </div>
        </div>
    )
}

export default ProjectIcons