import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomPlayPause from '../Library/CustomPlayPause'
import { Media, Player, controls } from 'react-media-player'
const {  SeekBar } = controls


class TitlePlayer extends Component {
  constructor() {
    super()
      this.state ={
        current: '1',
        next: '2',
        previous: '1',
        autoPlay: false,
        currentDuration: 0,
        currentTime: 0
      }
      this.handleClick = this.handleClick.bind(this)
      this.checkProgress = this.checkProgress.bind(this)
  }

  handleClick(e) {
  }

  checkProgress(object) {
    if (object.currentTime >=(object.duration - .5) &&
        object.duration !== 0) {

      let previous = this.state.current
      let current = this.state.next
      let next = this.props.playlist.songs.filter((item) => (item.number - 1).toString() === this.state.next)
      if (next.length > 0) {
        next = next[0].number.toString()
      } else {
        next = 'end'
      }
      this.setState({
        current: current,
        previous: previous,
        next: next,
        autoPlay: true
      })

    }
  }

  render() {

    return (
      <div className="TitleThumbPlayer">
        <Media>
          <div className="media">
            <div className="media-player elementFloatQuick">
              <Player

                src={`${this.props.songUrl}`}/>
            </div>
            <div className="PlayerControls elementFloatQuick">
              <Row>
                <Col
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  className="SeekBar">
                  <CustomPlayPause/>
                </Col>
                <Col
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  className="SeekBar2 elementFloatQuick">
                  <SeekBar />
                </Col>
              </Row>
            </div>
          </div>
        </Media>
        </div>
    );
  }
}

export default TitlePlayer;
