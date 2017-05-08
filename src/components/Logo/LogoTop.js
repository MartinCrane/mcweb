import React from 'react'
import { Link } from 'react-router'

export default class LogoTop extends React.Component {

  render() {
    const login = (
      <div className='LoginLogo'>
        <Link to='/login' data-id='mNow'>login</Link>
        ....
        <Link to='/newblog' data-id='mNow'>newblog</Link>
      </div>
  )
    return (
      <div className='LogoTop'>
          <img
            className='center-block'
            alt='Martin Crane Logo'
            src={require('../../images/logo-outlined.png')}>
          </img>
      </div>
    );
  }
}
