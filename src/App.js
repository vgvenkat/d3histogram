import React, { Component } from 'react';
import logo from './logo.svg'
import Preloading from './Preloading';

class App extends Component {
  state = {
    techSalaries: []
  }
  render() {
    if(this.state.techSalaries.length<1) {
      return <Preloading />
    }
    
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
   
  }
}

export default App;
