import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Lagoon from './Components/Lagoon';
import Portfolio from './Components/Portfolio'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div className='header'>
            <h1 className='garrett'>Garrett Moore</h1>
            {/* <h1 className='moore'>  Moore  </h1> */}
            {/* <h3 className='dev'>Full Stack Web Developer</h3> */}
          </div>
      <Lagoon />
       <nav>
         <Link className='nav-text'to='/'>Home</Link> | {' '}
         <Link className='nav-text'to='/About'>About Me</Link> | {' '}
         <Link className='nav-text'to='/Projects'>Projects</Link> | {' '}
         <Link className='nav-text'to='/Contact'>Contact</Link> 
       </nav>
       <Route exact path='/' render={()=><Home/>} />
       <Route exact path='/About' render={()=><About/>} />
       <Route exact path='/Projects' render={()=><Projects/>} />
       <Route exact path='/Contact' render={()=><Contact/>} />
       </div>
      </Router>
    );
  }
}

export default App;
