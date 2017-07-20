import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getData} from './ducks/user'
import './App.css';

class App extends Component {
  constructor() {
     super() 
     this.state = {

     }
  }
  componentDidMount() {
      this.props.getData()
   }
  componentWillReceiveProps(nextProps) {

  }
  render() {
     console.log(this.props)
     const {character, fetching} = this.props
     const characterElements = []
     if (character.name) {
        characterElements.push(<h2 key="name">{character.name}</h2>)
     }
       for (let key in character) {
          if (key !== "name" && !Array.isArray(character[key]) && typeof character[key] !== "object") {
            characterElements.push(<li key={key}>{key}: {character[key]}</li>)
          }
       }
    return (
      <div className="App">
         <h1>SWAPI Test</h1>
         {
            fetching
            ?
            <h2>Fetching...</h2>
            :
            null
         }
         {
            character.name 
            ?
            <ul>{characterElements}</ul>  
            :
            null            
         }

      </div>
    );
  }
}

function mapStateToProps(state) {
   return state
}
export default connect(mapStateToProps, {getData})(App);
