import React, { Component } from 'react';
import  SoundCloudAudio  from 'soundcloud-audio'
import { PlayButton, Progress } from 'react-soundplayer/components'
import { SoundPlayerContainer } from 'react-soundplayer/addons'

class TitlePlayer extends Component {


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
