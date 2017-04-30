import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;

class Title extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {

  }

  render() {
    return (
      <Col sm={12} md={6} lg={4}>
        <div className="Title">
          <img src={require(`../images/${this.props.title.image_url}`)}></img>
          <div className="TitleDetails">
            <h1>{this.props.title.name}</h1>
            <h2>{this.props.title.year}</h2>
            <h3>{this.props.title.credit}</h3>
            <h3>{this.props.title.director.name}</h3>

          </div>
        </div>
      </Col>
    );
  }

}

export default Title;
