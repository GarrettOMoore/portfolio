import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faDatabase, faDrum, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faGit, faBootstrap, faHtml5, faJs, faLinkedin, faNode, faNpm, faPython, faReact, faAdobe } from '@fortawesome/free-brands-svg-icons'
import { DiDjango, DiHeroku, DiMongodb, DiVisualstudio, DiPostgresql, DiMaterializecss, DiTerminal, DiCss3 } from "react-icons/di";
import { IconContext } from "react-icons";

library.add(faDatabase, faMusic, faExternalLinkAlt, faGithubSquare, faGit, faBootstrap, faHtml5, faJs, faLinkedin, faNode, faNpm, faPython, faReact, faAdobe, faDrum)


const SkillIcons = (props) => {
    return(
        <div className='skill-icon-box'>
        <p className='project-header'>Skills:</p>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faReact} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>React</p>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faJs} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>JavaScript</p>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faNode} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>Node</p>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faGit} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>Git</p>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faPython} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>Python</p>
        </div>
        {/* <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faDrum} size={'2x'}  color={'#2A363B'}/>
        <p>Name</p>
        </div> */}
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faDatabase} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>SQL</p>
        </div>
        {/* <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faMusic} size={'2x'}  color={'#2A363B'}/>
        <p>Music</p>
        </div> */}
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>Git Hub</p>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faNpm} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>NPM</p>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faHtml5} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>HTML5</p>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faAdobe} size={'4x'}  color={'#2A363B'}/>
        <p className='icon-text'>Adobe CS</p>
        </div>
        {/* <IconContext.Provider value={{ size: "4.5em", color: "#2A363B" }}> */}
                <div className='icon-box'>
                <DiDjango className= "react-icon" />
                <p className='icon-text'>Django</p>
                </div>
                <div className='icon-box'>
                <DiHeroku className= "react-icon" />
                <p className='icon-text'>Heroku</p>
                </div>
                <div className='icon-box'>
                <DiMongodb className= "react-icon" />
                <p className='icon-text'>MongoDB</p>
                </div>
                <div className='icon-box'>
                <DiVisualstudio className= "react-icon" />
                <p className='icon-text'>VSCode</p>
                </div>
                <div className='icon-box'>
                <DiCss3 className= "react-icon"/>
                <p className='icon-text'>CSS3</p>
                </div>
                <div className='icon-box'>
                <DiPostgresql className= "react-icon" /> 
                <p className='icon-text'>PostgreSQL</p>
                </div>
                <div className='icon-box'>
                <DiMaterializecss className= "react-icon" /> 
                <p className='icon-text'>Materialize</p>
                </div>
                <div className='icon-box'>
                <DiTerminal className= "react-icon"/> 
                <p className='icon-text'>CMD Line</p>
                </div>

        {/* </IconContext.Provider> */}
        </div>
    )
}

export default SkillIcons