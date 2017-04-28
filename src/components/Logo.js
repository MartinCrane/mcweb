import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { logoTwirl } from '../actions/mouse'

class Logo extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.logoTwirl = logoTwirl.bind(this)
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
      <div className={`Logo`} style={this.logoTwirl()}>
          <img ref='Logo'
               src={require('../images/logo.jpg')}></img>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y,
    mouseFire: state.mouse.mouseFire
  }
}

export const ConnectedLogo = connect(mapStateToProps)(Logo)
