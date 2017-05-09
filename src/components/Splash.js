import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { elementFloat } from '../actions/mouse'

export default class Splash extends Component {

  render() {
    return (
      <div className="spash">
        this is the splash page
      </div>
    );
  }
}
