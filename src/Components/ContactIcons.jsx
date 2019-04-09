import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

// const git = findIconDefinition({ prefix: 'fa', iconName: 'Github' })
// const linked = findIconDefinition({ prefix: 'fas', iconName: 'linkedIn'})

library.add(faGithubSquare, faExternalLinkAlt)


const ContactIcons = (props) => {
    return(
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='link-icon'icon={faExternalLinkAlt} size={'4x'} color={'#2A363B'} />
        </div>
    )
}

export default ContactIcons