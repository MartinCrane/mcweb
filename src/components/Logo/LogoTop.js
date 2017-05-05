import React from 'react'
import { Link } from 'react-router'

export default class LogoTop extends React.Component {

  render() {
    return (
      <div className='LogoTop'>
        <div >
          <img
            className='center-block'
            alt='Martin Crane Logo'
            src={require('../../images/logo-small-black.png')}>
          </img>
        </div>
        <div className='LoginLogo'>
          <Link to='/login' data-id='mNow'>login</Link>
          ....
          <Link to='/newblog' data-id='mNow'>newblog</Link>

        </div>
      </div>
    );
  }
}
