import React, { Component } from 'react';
import { Col, Row, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router'
import CustomPlayPause from './CustomPlayPause'
import { Media, Player, controls, utils } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen, withMediaProps } = controls


export default class PlaylistPlayer extends Component {

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
    let current = e.target.dataset.track
    let previous = this.state.current
    let next = this.props.playlist.songs.filter((item) => (item.number - 1).toString() === e.target.dataset.track)
    if (next.length > 0) {
      next = next[0].number.toString()
    } else {
      next = 'end'
    }
    this.setState({
      current: e.target.dataset.track,
      previous: previous,
      next: next,
      autoPlay: true
    })
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
      <Col sm={12} md={12} lg={12} className="PlayerContainer">
      <div className='PlayerLine'>
        <h2>
          {this.props.playlist.name}
        </h2>
        <p>
          {this.props.playlist.description}
        </p>

        <ul onClick={e => this.handleClick(e)}>
          {this.props.playlist.songs.map((item) =>
            <li
              className={this.state.current === item.number.toString() ? 'active' : null}
              data-track={item.number}>
              {item.name}
            </li>
          )}
        </ul>
        <Media>
          <div className="media">


            <div className="media-player">
              <Player
                autoPlay={this.state.autoPlay}
                onTimeUpdate={this.checkProgress}
                src={`${this.props.playlist.songs.filter((item) => item.number.toString() === this.state.current)[0].link}`}/>
            </div>
            <div className="PlayerControls elementFloat">
              <Row>
                <Col
                  xs={2}
                  sm={2}
                  md={1}
                  lg={1}
                  className="SeekBar">
                  <CustomPlayPause/>
                </Col>
                <Col
                  xs={10}
                  sm={10}
                  md={11}
                  lg={11}
                  className="SeekBar2 elementFloat">
                  <SeekBar />
                </Col>
              </Row>
              <h4>
                <CurrentTime/> / <Duration/>
              </h4>
            </div>
          </div>
        </Media>
        </div>
        <Clearfix/>
      </Col>
    );
  }
}