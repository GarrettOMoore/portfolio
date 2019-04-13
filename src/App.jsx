import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Music from './Components/Music'
import Contact from './Components/Contact'
import Logo from './Components/Logo'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

const eye = findIconDefinition({ prefix: 'fas', iconName: 'eye' })

library.add(faEye)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: ""
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className='left-box'>
            <Logo />
            <nav>
              <Link className='nav-text'to='/'>Home</Link> | {' '}
              <Link className='nav-text'to='/About'>About Me</Link> | {' '}
              <Link className='nav-text'to='/Projects'>Projects</Link> | {' '}
              <Link className='nav-text'to='/Music'>Music</Link> | {' '}
              <Link className='nav-text'to='/Contact'>Contact</Link> 
            </nav>
            <Link className='res-text'to='/Resume'> <Portfolio /> </Link> 
          </div>
          <div className='right-box'>
            <div className='animation-box'>           
              <Route exact path='/' render={()=><Landing/>} />
            </div> 
            <Route exact path='/About' render={()=><About/>} />
            <Route exact path='/Projects' render={()=><Projects/>} />
            <Route exact path='/Music' render={()=><Music/>} />
            <Route exact path='/Contact' render={()=><Contact/>} />
            <Route exact path='/Resume' render={()=><Resume/>} />
          </div>
        </div>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
