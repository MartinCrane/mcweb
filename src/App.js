import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import { updateMouse } from './actions/mouse'
import { updateSize } from './actions/screen'
import { ConnectedDtMenu } from './components/Menu/DtMenu'
import { ConnectedMobileMenu } from './components/Menu/MobileMenu'

import './App.css';

class App extends Component {
  constructor() {
    super()

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
      <div
        className="MainContent"
        onMouseMove={e => this.handleMouse(e)}>
        <ConnectedDtMenu/>

          <Grid className="ViewPort">
          {this.props.children}
          </Grid>

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
