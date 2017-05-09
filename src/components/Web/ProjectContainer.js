import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { elementFloatX } from '../../actions/mouse'


export default class Project1 extends Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.elementFloatX = elementFloatX.bind(this)
  }

  componentDidMount() {
    let specs = this.refs.Project1.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {

    return (
      <div className='webCenter'>
        <Col sm={12} md={12} lg={6} >
          THIS AND THAT
        </Col>
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

export const ConnectedProject1 = connect(mapStateToProps)(Project1)
