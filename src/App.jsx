import React, { Component } from 'react';
import './App.css';
import Lagoon from './Components/Lagoon';
import Mirror from './Components/Mirror'
import Test from './Components/Test'
import Portfolio from './Components/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className='header'>
        <h1 className='garrett'>  Garrett  </h1>
        <h1 className='moore'>  Moore  </h1>
       </div>
        <Lagoon />
       {/* <div className='dev-box'>
        <h3 className='web-dev'>Full Stack Web Developer</h3>
       </div> */}
          
       <Portfolio />
        {/* <div className='test-left'>
          <Test />
        </div>
        <div className='test-right'>
          <Test />
        </div> */}

      </div>
    );
  }
}

export default App;
