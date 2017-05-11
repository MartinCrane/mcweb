import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'


class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { className, style, media } = this.props
    const pause = (<img src='https://s3.amazonaws.com/www.martincrane.net/icon/pause.svg' style={{width:'10vw', maxWidth: '30px'}}></img>)
    const play = (<img src='https://s3.amazonaws.com/www.martincrane.net/icon/play.svg' style={{width:'10vw', maxWidth: '30px'}}></img>)
    return (
      <div
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        { media.isPlaying ? pause: play }
      </div>
    )
  }
}

export default withMediaProps(CustomPlayPause)
