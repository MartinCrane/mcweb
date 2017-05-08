import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { elementFloat } from '../actions/mouse'

export default class Splash extends Component {

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
    let specs = this.refs.Splash.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {
    return (
      <Row key='a' ref='Splash'>
        <img></img>
      </Row>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y
  }
}

export const ConnectedSplash = connect(mapStateToProps)(Splash)
