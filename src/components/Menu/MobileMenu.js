import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
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

        <div className={`MobileSub ${this.state.show ? 'on': 'off'}`}>
          <button className='MobileMenuItem' key={1}>
            <NavLink to='/' data-id='mNow'>NOW</NavLink>
          </button>
          <button className='MobileMenuItem' key={2}>
            <NavLink
              ref='titleMenu'
              to='/titles'
              data-id='mWork'>WORK</NavLink>
          </button>
          <button className='MobileMenuItem' key={3}>
            <NavLink to='/news' data-id='mNews'>NEWS</NavLink>
          </button>
          <button className='MobileMenuItem' key={4}>
            <NavLink to='/about' data-id='mAbout'>ABOUT</NavLink>
          </button>
          <button className='MobileMenuItem' key={5}>
            <NavLink to='/about' data-id='mAbout'>LIBRARY</NavLink>
          </button>
          <button className='MobileMenuItem' key={6}>
            <NavLink to='/about' data-id='mAbout'>WEB</NavLink>
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
