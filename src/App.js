import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addName} from './ducks/user'
import Nav from './components/Nav/Nav'
import Input from './components/Input/Input'
import './App.css';

class App extends Component {
  constructor() {
     super()
     this.state = {
     }

  }

  componentWillReceiveProps(nextProps) {
    console.log('New Props',nextProps)
  }

  render() {
    return (
      <div className="App">
         <Nav />
         <h1>Hi there, {this.props.name}</h1>
         <Input />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}


export default connect(mapStateToProps, {addName}) (App);
