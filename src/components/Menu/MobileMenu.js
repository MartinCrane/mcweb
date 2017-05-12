import React from 'react';
import { connect } from 'react-redux'
import NavLink from './NavLink'

class MobileMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      show:true
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(e) {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="MobileMenu">
        <div className="MobileLogo">
          <img
            alt={'logo'}
            className='center-block'
            src='https://s3.amazonaws.com/www.martincrane.net/image/logo-outlined-small.png'>
          </img>
        </div>
        <div className={`MobileSub`}>
          <NavLink to='/work' data-id='mWork'>
            <button className='MobileMenuItem' key={1}>WORK</button>
          </NavLink>
          <NavLink to='/news' data-id='mNews'>
            <button className='MobileMenuItem' key={2}>NEWS</button>
          </NavLink>
          <NavLink to='/library' data-id='mLibrary'>
            <button className='MobileMenuItem' key={4}>LIBRARY</button>
          </NavLink>
          <NavLink to='/about' data-id='mAbout'>
            <button className='MobileMenuItem' key={3}>ABOUT</button>
          </NavLink>
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

export const ConnectedMobileMenu = connect(mapStateToProps)(MobileMenu)
