import React from 'react';
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import { updateMouse, elementFloat } from '../../actions/mouse'
import { bindActionCreators } from 'redux'
import { Clearfix } from 'react-bootstrap';

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
          <div className="continue">
            <h1><Link to={'/work'}>Continue to martincrane.net</Link></h1>
            <img style={{'height':'20px', 'padding-left':'1em'}} src='https://s3.amazonaws.com/www.martincrane.net/image/noon/right.png'></img>
        </div>
          <div className='noonWrap elementFloat '>
            <div className="noonTitle">
              <h5><b>NOON QUARTETS</b> (2017)</h5>
            </div>
            <div className='noonCard'>
              <div className='noonArt' >
                <img className='slantL blessed' style={{'width':'100%'}} src='https://s3.amazonaws.com/www.martincrane.net/image/noon/SQ001.png'></img>
              </div>
              <div className='fifty'>
                <div className='noonPlayer slantR' style={{'width':'100%'}}>
                  <LogoPlayer
                    songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                    title='Noon Quartet No.3'
                    />
                  <LogoPlayer
                    songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                    title='Noon Quartet No.2'
                    />
                  <LogoPlayer
                    songUrl="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-4.m4a"
                    title='Noon Quartet No.1'
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
                  <h4>Orchestration Advice: Michael Beharie</h4>
                  <h4>Art: Matthew Boblet</h4>
                </div>
                <div className="notes">
                  <h3 style={{'font-size':'1.5em'}}>July 18, 2017</h3>
                  <p>The Noon Quartets are a series of string quartets I wrote in the fall of 2016. When I began this project, I hadn’t read music notation in 15 years, had never in my life written notation, hadn’t experience the magic that is hearing other people play something I’d written. I wanted to make music that was separate from films or songs and combined the work I do on a computer with real life flesh and blood. 6 months later, with the generosity of the American Contemporary Music Ensemble, I can present the first installment of an ongoing series of my instrumental music. In addition to the music, I was lucky to have Pepi Ginsberg film the process, and her short documentary on No.3 is available at Ravelin Magazine. I hope you enjoy listening to these pieces as much as I enjoyed writing them.</p>
                  <h3 style={{'font-size':'1.5em'}}>- Martin</h3>

                </div>
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
