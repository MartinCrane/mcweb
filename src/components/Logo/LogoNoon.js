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
import Spash from '../Splash'


class Logo extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alpha: null,
      beta: null,
      gamma: null,
    }
  }

  render() {
    const video = (
      <div className='ravelin'>
        <Row className="video-responsive postMedia"
          style={{"height":"100%"}}>
          <Media>
            <div className="media">
              <div className="media-player">
                <Player
                  src="https://vimeo.com/224544275/4e9760980a"
                  vendor="vimeo"
                  />
              </div>
            </div>
          </Media>
        </Row>
      </div>
    )

    return (
      <div>
          <div className='noonCard'>
            <img className='slantL' style={{'width':'50%', height:'50%'}} src='https://s3.amazonaws.com/www.martincrane.net/image/noon/SQ001.png'></img>
            <div className='noonPlayer slantR'>
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
              {video}
            </div>
          </div>
          <div className='credits'>

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
