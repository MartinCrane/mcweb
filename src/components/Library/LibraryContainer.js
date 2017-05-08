import React from 'react';
import { Row, Grid, Clearfix } from 'react-bootstrap';
import { Route } from 'react-router';

import { connect } from 'react-redux'
import { elementFloat } from '../../actions/mouse'

export default class LibraryContainer extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     left: 0,
  //     right: 0,
  //     top: 0,
  //     bottom: 0
  //   }
  //   this.elementFloat = elementFloat.bind(this)
  // }
  //
  // componentDidMount() {
  //   let specs = this.refs.LibraryContainer.getBoundingClientRect()
  //   this.setState({
  //     left: specs.left,
  //     right: specs.right,
  //     top: specs.top,
  //     bottom: specs.bottom
  //   })
  // }

  render() {
    return (
         <Row className='LibraryContainer'>
         LIBRARY
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

export const ConnectedLibraryContainer = connect(mapStateToProps)(LibraryContainer)
