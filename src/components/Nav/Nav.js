import React, {Component} from 'react'
import {connect} from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <nav>
        <span>{this.props.name}</span>
      </nav>

    )
  }
}
function mapStateToProps (state) {
  return {
    name: state.name
  }
}
export default connect(mapStateToProps,{})(Nav)
