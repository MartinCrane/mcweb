import React from 'react'

export default class LogoTop extends React.Component {

  render() {
    return (
      <div className='LogoTop'>
          <div >
          <img className='center-block' alt='Martin Crane Logo' src={require('../images/logo-small-black.png')}></img>
          </div>
    </div>
    );
  }
}
