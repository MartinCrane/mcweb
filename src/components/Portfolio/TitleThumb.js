import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router'
import TitlePlayer from './TitlePlayer'
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';


class TitleThumb extends Component {

  render() {
    const test = (
        <div className="TitleThumb">
          <div className='thumbImage'>
            <img
              src={`http://www.brazosbrazos.com/image/${this.props.title.imageUrl}`}
              alt='title'>
            </img>
          </div>
          <div className='pseudoAbs'>
            {this.props.title.scId ? <TitlePlayer songUrl={this.props.title.scId}/> : <div className='none TitlePlayer'></div>}
          </div>
          <div className="thumbDetails">
            <h2>
              {this.props.title.name}
            </h2>
            <h2>
              {this.props.title.credit} / {this.props.title.year} / {this.props.title.author}
            </h2>
          </div>
        </div>
    )
    return (
      <Col sm={12} md={6} lg={6}>
        {test}
      </Col>
    );
  }

}

export default TitleThumb;
