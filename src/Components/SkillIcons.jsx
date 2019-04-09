import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faDatabase, faDrum } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faGit, faBootstrap, faHtml5, faJs, faLinkedin, faNode, faNpm, faPython, faReact, faAdobe } from '@fortawesome/free-brands-svg-icons'
import { DiDjango, DiHeroku, DiMongodb, DiVisualstudio, DiPostgresql, DiMysql } from "react-icons/di";
import { IconContext } from "react-icons";

library.add(faDatabase, faExternalLinkAlt, faGithubSquare, faGit, faBootstrap, faHtml5, faJs, faLinkedin, faNode, faNpm, faPython, faReact, faAdobe, faDrum)


const SkillIcons = (props) => {
    return(
        <div className='skill-icon-box'>
        <p className='page-header'>Skills:</p>
        <FontAwesomeIcon className='git-icon'icon={faReact} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faJs} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faNode} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faPython} size={'4x'}  color={'#2A363B'}/>
        {/* <FontAwesomeIcon className='git-icon'icon={faDrum} size={'4x'}  color={'#2A363B'}/> */}
        <FontAwesomeIcon className='git-icon'icon={faDatabase} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faGit} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faNpm} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faHtml5} size={'4x'}  color={'#2A363B'}/>
        <FontAwesomeIcon className='git-icon'icon={faAdobe} size={'4x'}  color={'#2A363B'}/>
        {/* <IconContext.Provider value={{ size: "4.5em", color: "#2A363B" }}> */}
                <DiDjango className= "react-icon" />
                <DiHeroku className= "react-icon" />
                <DiMongodb className= "react-icon" />
                <DiVisualstudio className= "react-icon" /> 
                <DiPostgresql className= "react-icon" /> 
        {/* </IconContext.Provider> */}
        </div>
    )
}

export default SkillIcons