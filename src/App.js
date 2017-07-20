import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
     super() 
     this.state = {

     }
  }
  componentDidMount() {
   }
  componentWillReceiveProps(nextProps) {

  }
  render() {
     console.log(this.props)
    return (
      <div className="App">
         <h1>SWAPI Test</h1>

      </div>
    );
  }
}

export default App;
