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
        <div className="MobileLogo"><img alt={'logo'} className='center-block' src='https://s3.amazonaws.com/www.martincrane.net/image/logo-outlined-small.png'></img></div>
        <div className={`MobileSub`}>
          <button className='MobileMenuItem' key={1}>
            <NavLink to='/titles' data-id='mWork'>WORK</NavLink>
          </button>
          <button className='MobileMenuItem' key={2}>
            <NavLink to='/news' data-id='mNews'>NEWS</NavLink>
          </button>
          <button className='MobileMenuItem' key={3}>
            <NavLink to='/about' data-id='mAbout'>ABOUT</NavLink>
          </button>
          <button className='MobileMenuItem' key={4}>
            <NavLink to='/library' data-id='mLibrary'>LIBRARY</NavLink>
          </button>
          <button className='MobileMenuItem' key={5}>
            <NavLink to='/web' data-id='mWeb'>WEB</NavLink>
          </button>
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
