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
const {  SeekBar } = controls
import { Link } from 'react-router'
import Spash from '../Splash'


class Logo extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      creditShow: false
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.creditShow = this.creditShow.bind(this)
  }

  handlePlay() {
    this.setState({
      videoPlay: !this.state.videoPlay
    })
  }

  creditShow() {
    this.setState({
      creditShow: !this.state.creditShow,
    })
  }

  render() {
    const video = (
      <div className={this.state.videoPlay ? 'playing elementFloat': 'dNone '}>
          <Row className='video-responsive'>
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
        <div className='noonPage'>
          <div className='noonWrap elementFloat '>
            <div className="noonTitle">
              <h5><b>NOON QUARTETS</b> (2017)</h5>
            </div>
            <div className='noonCard'>
              <div className='noonArt'  style={{'width':'50%'}}>
                <img className='slantL blessed' style={{'width':'100%'}} src='https://s3.amazonaws.com/www.martincrane.net/image/noon/SQ001.png'></img>
              </div>
              <div style={{'width':'50%'}}>
                <div className='noonPlayer slantR' style={{'width':'100%'}}>
                  <LogoPlayer
                    songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                    title='Noon Quartet No.1'
                    />
                  <LogoPlayer
                    songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                    title='Noon Quartet No.2'
                    />
                  <LogoPlayer
                    songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                    title='Noon Quartet No.3'
                    />
                  <img className='blessed' onClick={this.handlePlay} style={{'width':'100%', 'padding-top':'2em'}} src='https://s3.amazonaws.com/www.martincrane.net/image/noon/rav.png'></img>
                </div>

              </div>
            </div>
            {video}
          </div>
          <div className={this.state.creditShow ? 'credits cup' : 'credits cdown'}>
            <div id='tab' onClick={this.creditShow}>
              <img src='https://s3.amazonaws.com/www.martincrane.net/image/noon/rose-icon.png'></img>
            </div>
              <div className='creditsContainer'>
                <div className="cre">
                  <h4>Clarice Jensen - Cello </h4>
                  <h4>Ben Russell - Violin</h4>
                  <h4>Laura Lutzke - Violin</h4>
                  <h4>Isabel Hagen - Viola</h4>
                  <h4>of <a href="http://www.acmemusic.org/" target="_blank"><b>American Contemporary Music Ensemble (ACME)</b></a></h4>
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
            <div className='continueContainer'>
              <div className="continue">
                <h1><Link to={'/work'}>Continue to martincrane.net</Link></h1>
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
