import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addName} from '../../ducks/user'

class Input extends Component {
  constructor(){
    super()
    this.state= {
      name: ''
    }
    this.updateName = this.updateName.bind(this)
    this.submitName = this.submitName.bind(this)
  }

  //methods
  updateName (e) {
    this.setState ({name: e.target.value})
  }
  submitName (e) {
    e.preventDefault()
    this.props.addName(this.state.name)
  }
  render() {
    return (
      <form onSubmit={this.submitName}>
        <input type="text"
          value={this.state.name}
          onChange={this.updateName}
          placeholder="Update Name Here" />
      </form>

    )
  }
}
function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps,{addName})(Input)
