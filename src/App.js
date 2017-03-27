import React, { Component } from 'react';
import logo from './logo.svg'
import Preloading from './components/Preloading';
import * as d3 from 'd3';
import _ from 'lodash';
import { loadAllData } from './DataHandling';
class App extends Component {
  state = {
    techSalaries: [],
    countyNames: [],
    medianIncomes: []
  }
  componentWillMount() {
    loadAllData(data => this.setState(data));
  }
  render() {
    if(this.state.techSalaries.length<1) {
      return <Preloading />
    }
    
      return (
        <div className="App container">
          <h1>Loaded {this.state.techSalaries.length} salaries</h1>
        </div>
      );
   
  }
}

export default App;
