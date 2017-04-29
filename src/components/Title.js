import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Title extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    
  }

  render() {
    return (
      <Col sm={12} md={6} lg={6} onClick={e => this.handleClick(e)}>
        <div className="Title">
          <img src={require('../images/East-Hell.png')}></img>
          <h1>East Hell</h1>
          <h2>2017</h2>
          <h2>Callum Smith</h2>
          <h2>Short</h2>
        </div>
      </Col>
    );
  }

}

export default Title;
