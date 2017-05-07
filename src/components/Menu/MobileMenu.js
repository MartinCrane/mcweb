import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import NavLink from './NavLink'

class MobileMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      show:false
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
      <div
        onClick={e => this.handleClick(e)}>
        {`click for menu ${this.state.show}`}
        </div>
        <div className={`MobileSub ${this.state.show ? 'on': 'off'}`}>
          <div className='MobileMenuItem' key={1}>
            <NavLink to='/' data-id='mNow'>NOW</NavLink>
          </div>
          <div className='MobileMenuItem' key={2}>
            <NavLink
              ref='titleMenu'
              to='/titles'
              data-id='mWork'>Work</NavLink>
          </div>
          <div className='MobileMenuItem' key={3}>
            <NavLink to='/news' data-id='mNews'>News</NavLink>
          </div>
          <div className='MobileMenuItem' key={4}>
            <NavLink to='/about' data-id='mAbout'>About</NavLink>
          </div>
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
