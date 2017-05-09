import React from 'react';
import { connect } from 'react-redux'
import { elementFloatY } from '../../actions/mouse'

class LogoSlice extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.elementFloatY = elementFloatY.bind(this)
  }

  componentDidMount() {
    let specs = this.refs.Logo.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {
    return (
      <div
        className='LogoSlice elementFloat'
        style={this.elementFloatY()}>
        <a href='/work'>
        <img
          ref={`Logo`}
          alt='Martin Crane Logo'
          src={this.props.link}>
        </img>
        </a>
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

export const ConnectedLogoSlice = connect(mapStateToProps)(LogoSlice)
