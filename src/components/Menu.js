import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'


class Menu extends React.Component {
  constructor() {
    super()

  }


  render() {
    return (
      <div id="menu" className='Menu'>
        <div className='MenuItem' key={1}>Work</div>
        <div className='MenuItem' key={2}>Library</div>
        <div className='MenuItem' key={3}>News</div>
        <div className='MenuItem' key={4}>About</div>
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

export const ConnectedMenu = connect(mapStateToProps)(Menu)
