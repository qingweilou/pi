import React, { Component } from 'react';
import LineExample from './line';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LineExample data="this.getData()"></LineExample>
      </div>
    );
  }

  getData() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First Dataset',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              data: [65,59,80,81,56,55,40]
          }
      ]
    };
    return data;
  }
}

export default App;
