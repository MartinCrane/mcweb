import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { elementFloat } from '../../actions/mouse'
import LogoTop  from '../LogoTop'

class DtMenu extends React.Component {
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
    let specs = this.refs.DtMenu.getBoundingClientRect()
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

    const dtSubMenu = (
      <div className='DtSubMenu'>
           <h2>scoring:</h2>
           <h3>narrative</h3>
           <h3>documentary</h3>
           <h3>commercial</h3>
           <h2>original music:</h2>
           <h3>production</h3>
           <h3>mixing</h3>
           <h3>original music:</h3>
      </div>
    )

    const dtMenu = (
      <div id="menu" style={this.elementFloat()}
          ref='DtMenu'
          className={`DtMenu elementFloat ${this.state.menu}`}
          onClick={e => this.handleClick(e)}>
          <div className='DtMenuItem' key={1}><Link to='/home' data-id='Mnow'>NOW</Link></div>
          <div className='DtMenuItem' key={2}><Link to='/titles' data-id='Mwork'>Work</Link></div>
          <div className='DtMenuItem' key={3}><Link to='/news' data-id='Mnews'>News</Link></div>
          <div className='DtMenuItem' key={4}><Link to='/about' data-id='Mabout'>About</Link></div>
          {this.state.menu === 'Mwork' ? dtSubMenu : null}
      </div>
    )


    return (
      <div>
        <LogoTop/>
        {dtMenu}
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

export const ConnectedDtMenu = connect(mapStateToProps)(DtMenu)
