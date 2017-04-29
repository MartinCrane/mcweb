import React from 'react';
import { connect } from 'react-redux'
import { elementFloat } from '../actions/mouse'
import { Link } from 'react-router'

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      menu: 'Mlogo'
    }
    this.elementFloat = elementFloat.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    let specs = this.refs.Menu.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  handleClick(e) {
    this.setState({
      menu: e.target.dataset.id
    })
  }

  render() {
    return (
      <div id="menu" style={this.elementFloat()}
                     ref='Menu'
                     className={`Menu elementFloat ${this.state.menu}`}
                     onClick={e => this.handleClick(e)}>
        <div className='MenuItem' key={1}><Link to='/titles' data-id='Mwork'>Work</Link></div>
        <div className='MenuItem' key={2}><Link to='/logo' data-id='Mlogo' >Logo</Link></div>
        <div className='MenuItem' key={3}><Link to='/news' data-id='Mnews'>News</Link></div>
        <div className='MenuItem' key={4}><Link to='/about' data-id='Mabout'>About</Link></div>
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
