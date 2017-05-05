import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { formatMarkdown } from '../../actions/blog'
import { Link } from 'react-router'
import  SoundCloudAudio  from 'soundcloud-audio'
import Player from 'react-soundcloud-player'
import Play from 'react-soundcloud-player'
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
const { SoundCloudLogoSVG } = Icons;
const clientId = 'c5a171200f3a0a73a523bba14a1e0a29';
const streamUrl = 'https://api.soundcloud.com/tracks/320972715/stream';

class Post extends Component {

  constructor() {
    super()
    this.formatMarkdown = formatMarkdown.bind(this)
  }

  render() {
    const post = (
      <Row>
        <Col sm={0} md={1} lg={2}>
        </Col>
        <Col sm={12} md={10} lg={8}>
          <div className="Post">
            <h1>CASDFGSDFG</h1>
            <SoundPlayerContainer
              streamUrl={streamUrl}
              clientId={clientId}>
              <PlayButton
                className='x23'
                playing={false}
                seeking={true}
                soundCloudAudio={new SoundCloudAudio('c5a171200f3a0a73a523bba14a1e0a29')}
                />
              <Progress
                className='prog'
                value={(this.props.currentTime / this.props.duration) * 100 || 0}
                {...this.props}
                />
            </SoundPlayerContainer>
            <hr>
            </hr>
          </div>
        </Col>
        <Col sm={0} md={1} lg={2}>
        </Col>
      </Row>
    )
    return (
      <div>
        {post}
      </div>
    );
  }

}

export default Post;
