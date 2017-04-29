import React, { Component } from 'react';
import { updateMouse } from './actions/mouse'
import { updateSize } from './actions/mouse'
import { Row, Grid, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ConnectedMenu } from './components/Menu'


import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth
    }
    this.handleMouse = this.handleMouse.bind(this)
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth
    });
  }
  handleMouse(e) {
    this.props.updateMouse({
      x: e.clientX,
      y: e.clientY
    })
  }


  render() {
    return (
      <div className="Main" onMouseMove={e => this.handleMouse(e)}>
          <div className="MainContent ">
            <ConnectedMenu/>
            <div className="ViewPort">
              {this.props.children}
            </div>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMouse: updateMouse,
    updateSize: updateSize
  }, dispatch)
}

const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y
  }
}

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
