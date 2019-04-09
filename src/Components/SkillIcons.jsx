import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faGithubSquare, faExternalLinkAlt)


const SkillIcons = (props) => {
    return(
        <div className='skill-icon-box'>
        <p className='page-header'>Skills:</p>
        <FontAwesomeIcon className='git-icon'icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/>
        </div>
    )
}

export default SkillIcons