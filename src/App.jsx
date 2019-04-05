import React, { Component } from 'react';
import './App.css';
import Lagoon from './Components/Lagoon';
import Mirror from './Components/Mirror'
import Test from './Components/Test'

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className='header'>
        <h1>Garrett Moore</h1>
        <h3>Full Stack Web Developer</h3>
          <Lagoon />
       </div>
        <div className='test-left'>
          <Test />
        </div>
        <div className='test-right'>
          <Test />
        </div>

      </div>
    );
  }
}

export default App;
