import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router'
import  SoundCloudAudio  from 'soundcloud-audio'
import Player from 'react-soundcloud-player'
import Play from 'react-soundcloud-player'
import { PlayButton, Progress, Icons } from 'react-soundplayer/components'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
const { SoundCloudLogoSVG } = Icons

class TitlePlayer extends Component {

  constructor() {
    super()
  }

  render() {
    let streamUrl = `https://api.soundcloud.com/tracks/${this.props.songUrl}/stream`;

    return (
      <div className="TitlePlayer">
        <SoundPlayerContainer
          streamUrl={streamUrl}
          clientId={'c5a171200f3a0a73a523bba14a1e0a29'}>
          <Progress
            className='prog'
            value={(this.props.currentTime / this.props.duration) * 100 || 0}
            {...this.props}
            />
          <PlayButton
            playing={false}
            seeking={true}
            soundCloudAudio={new SoundCloudAudio('c5a171200f3a0a73a523bba14a1e0a29')}
            />
        </SoundPlayerContainer>
      </div>
    );
  }

}

export default TitlePlayer;
