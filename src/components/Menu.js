import React from 'react';
import { connect } from 'react-redux'
import { elementFloat } from '../actions/mouse'

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.elementFloat = elementFloat.bind(this)
  }

  componentDidMount() {
    let specs = this.refs.Menu.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {
    return (
      <div id="menu" style={this.elementFloat()} ref='Menu' className='Menu'>
        <div className='MenuItem' key={1}>Work</div>
        <div className='MenuItem' key={2}>Library</div>
        <div className='MenuItem' key={3}>News</div>
        <div className='MenuItem' key={4}>About</div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y
  }
}

export const ConnectedMenu = connect(mapStateToProps)(Menu)
