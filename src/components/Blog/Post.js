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
          <div className="Post">
          </div>
    )
    return (
      <Row>
        {post}
      </Row>
    );
  }

}

export default Post;
