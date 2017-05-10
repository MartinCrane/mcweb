import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router'
import CustomPlayPause from './CustomPlayPause'
import { Media, Player, controls, utils } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen, withMediaProps } = controls


export default class xPlayer extends Component {

  constructor() {
    super()
      this.state ={
        current: '1',
        next: 'start',
        previous: 'asdf',
        autoPlay: false
      }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      current: e.target.dataset.track
    })
  }

  render() {
    const list = [{number: 1, name: 'americana', url:'https://s3.amazonaws.com/www.martincrane.net/audio/americana.m4a'}, {number: 2, name: 'americana2aa', url:'https://s3.amazonaws.com/www.martincrane.net/audio/airwick-gift-of-home.m4a'}, {number: 3, name: 'ameria2aa', url:'https://s3.amazonaws.com/www.martincrane.net/audio/americana.m4a'}]

    const x= (<Media>
        <div className="media">
          <div className="media-player">
            <Player autoPlay={this.state.autoPlay}
                    src={`${list.filter((item) => item.number.toString() === this.state.current)[0].url}`}/>
          </div>
          <div className="PlayerControls">
            <CustomPlayPause/>
            <CurrentTime/> /
            <Duration/>
            <div className="SeekBar">
              <SeekBar />
            </div>
          </div>
          <div>
            next
          </div>
        </div>
      </Media>)

    return (
      <div className="PlayerContainer">
          <h1>current: {list.filter((item) => item.number.toString() === this.state.current)[0].name}</h1>
        <ul onClick={e => this.handleClick(e)}>
          {list.map((item) => <li className={this.state.current === item.number.toString() ? 'active' : null} data-track={item.number}>{item.name}</li>)}
        </ul>
        {x}

      </div>
    );
  }
}
