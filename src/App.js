import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import { updateMouse } from './actions/mouse'
import { ConnectedDtMenu } from './components/Menu/DtMenu'
import { ConnectedMobileMenu } from './components/Menu/MobileMenu'
import { elementFloat } from './actions/mouse'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.elementFloat = elementFloat.bind(this)
    this.handleMouse = this.handleMouse.bind(this)
  }

  handleMouse(e) {
    this.props.updateMouse({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    let specs = this.refs.Port.getBoundingClientRect()
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
        className="MainContent"
        onMouseMove={e => this.handleMouse(e)}>
        <ConnectedDtMenu/>
        <div ref='Port'>
          <Grid className='elementFloat ViewPort' >
              {this.props.children}
          </Grid>
        </div>
        <ConnectedMobileMenu/>
      </div>
    )
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

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
