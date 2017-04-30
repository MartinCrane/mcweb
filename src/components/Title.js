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
      <Col sm={12} md={6} lg={6}>
        <div className="Title">
          <img src={require(`../images/${this.props.title.image_url}`)}></img>
          <div className="TitleDetails">
            <h1>{this.props.title.name}</h1>
            <h2>{this.props.title.year}</h2>
            <h3>{this.props.title.credit}</h3>
            <h3>{this.props.title.director.name}</h3>
            <iframe className="soundcloud" src={`${this.props.title.audio1}`}></iframe>
          </div>
        </div>
      </Col>
    );
  }

}

export default Title;
