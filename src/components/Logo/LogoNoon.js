import React from 'react';
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import { updateMouse, elementFloat } from '../../actions/mouse'
import { bindActionCreators } from 'redux'
import { Clearfix } from 'react-bootstrap';
import { ConnectedLogoSlice } from './LogoSlice'
import { logoSliceLink } from '../../data/logoSliceLink'
import { Media, Player, controls } from 'react-media-player'
import CustomPlayPause from '../Library/CustomPlayPause'
import LogoPlayer from './LogoPlayer'
import Waypoint from 'react-waypoint';
const {  SeekBar } = controls
import Spash from '../Splash'


class Logo extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      videoPlay: false
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handlePlay() {
    this.setState({
      videoPlay: !this.state.videoPlay,
      top:window.scrollY
    })
  }

  handleScroll(event) {
    alert("go")
    this.setState({
      top: event.currentTarget.scrollTop
    })
  }

  render() {
    const video = (
      <div className={this.state.videoPlay ? 'playing elementFloat': 'dNone '}>
        <div style={{'height':'20vh'}}>
        </div>
          <Row className='video-responsive' >
            <Media style={{'z-index':'10001', 'border':'3px white'}}>
              <div className="media">
                <div className="media-player" >
                  <Player
                    src="https://vimeo.com/224544275/4e9760980a"
                    vendor="vimeo"
                    style={{'border':'10px white'}}
                    />
                </div>
              </div>
            </Media>
          </Row>
          <div className='lightroom' onClick={this.handlePlay}></div>
      </div>
    )

    return (
        <div >
          <div className='noonWrap elementFloat '>
            <div className='noonCard'>
              <div style={{'width':'50%'}}>
                <img className='slantL blessed' style={{'width':'100%'}} src='https://s3.amazonaws.com/www.martincrane.net/image/noon/SQ001.png'></img>
              </div>

              <div className='noonPlayer slantR '>
                <LogoPlayer
                  songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                  title='Noon Quartet 1'
                  />
                <LogoPlayer
                  songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                  title='Noon Quartet 2'
                  />
                <LogoPlayer
                  songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                  title='Noon Quartet 3'
                  />
                <img className='blessed' onClick={this.handlePlay} style={{'width':'100%', 'padding-top':'2em'}} src='https://s3.amazonaws.com/www.martincrane.net/image/noon/rav.png'></img>
              </div>
            </div>
            {video}
          </div>
            <div className='credits'>
              <div className="cre">
                <h4><b>NOON QUARTETS</b> by Martin  Crane</h4>
                <h4>-</h4>
                <h4>Clarice Jensen - Cello</h4>
                <h4>Ben Russell - Violin</h4>
                <h4>Laura Lutzke - Violin</h4>
                <h4>Isabel Hagen - Viola</h4>
                <h4><b>American Contemporary Music Ensemble (ACME)</b></h4>
                <h4>-</h4>
                <h4>Engineered by Ryan Streber at Oktaven Audio</h4>
                <h4>Mixed by Martin Crane</h4>
                <h4>Mastered by Alex DeTurk</h4>
                <h4>Art: Matthew Boblet</h4>
              </div>
              <div className="notes">
                <p>These are notes on what Im writing and whathese are notes  writing and whathese are notes  writing and whathese are notes  writing and whathese are notes  writing and whathese are notes  writing and whathese are notes  writing and whathese are notes  writing and whre notes  writing and whre notes  writing and whre notes  writing and whre notes  writing and whre notes  writing and whre notes  writing and whathese are notes on what Im writing and what  </p>
                <h4>Art: Matthew Boblet</h4>
              </div>
            </div>

          </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMouse: updateMouse
  }, dispatch)
}

export const ConnectedLogo = connect(mapStateToProps, mapDispatchToProps)(Logo)
