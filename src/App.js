import React, { Component } from 'react';
import { updateMouse } from './actions/mouse'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ConnectedLogo } from './components/Logo'
import { ConnectedMenu } from './components/Menu'
import logo from './logo.svg';
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
      <div className="Main" onMouseMove = {e => this.handleMouse(e)}>
        <div className="MainContent">
          < ConnectedMenu />
          < ConnectedLogo />
        </div>
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
