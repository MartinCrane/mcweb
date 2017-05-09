import React from 'react';
import { Row } from 'react-bootstrap';
import { Route } from 'react-router';
import { ConnectedProject1 } from './Project1';
import { updateMouse } from '../../actions/mouse'
import { elementFloatX } from '../../actions/mouse'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default class WebContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.elementFloatX = elementFloatX.bind(this)
    this.handleMouse = this.handleMouse.bind(this)
  }

  handleMouse(e) {
    this.props.updateMouse({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div className='screen'>
        <div className='WebContainer' onMouseMove={e => this.handleMouse(e)}>
          <ConnectedProject1/>
          <ConnectedProject1/>
          <ConnectedProject1/>
          <ConnectedProject1/>
          
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMouse: updateMouse
  }, dispatch)
}
const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y
  }
}

export const ConnectedWebContainer = connect(mapStateToProps, mapDispatchToProps)(WebContainer)
