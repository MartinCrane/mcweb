import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { elementFloat } from '../../actions/mouse'
import { bindActionCreators } from 'redux'
import { updateFilter } from '../../actions/filter'
import LogoTop  from '../LogoTop'

class DtMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      menu: 'mHome',
      filter: 'fAll'
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
      if (e.target.dataset.id != null) {
        this.setState({
          menu: e.target.dataset.id
        })
      }
      if (e.target.dataset.filter != null) {
        this.setState({
          filter: e.target.dataset.filter
        })
        this.props.updateFilter(e.target.dataset.filter)
      }

  }

  render() {
    const dtSubMenu = (
      <div className='DtSubMenu'>
         <h2 data-filter='fAll'>all</h2>
         <h2><b data-filter='fScoring'>scoring</b></h2>
         <h2 data-filter='fNarrative'>narrative</h2>
         <h2 data-filter='fDocumentary'>documentary</h2>
         <h2 data-filter='fCommercial'>commercial</h2>
         <h2><b data-filter='fOriginalMusic'>original music</b></h2>
         <h2 data-filter='fProduction'>production</h2>
         <h2 data-filter='fMixing'>mixing</h2>
         <h2 data-filter='fSongwriting'>songwriting</h2>
      </div>
    )

    const dtMenu = (
      <div id="menu" style={this.elementFloat()}
          ref='DtMenu'
          className={`DtMenu elementFloat ${this.state.menu}`}
          onClick={e => this.handleClick(e)}>
          <div className='DtMenuItem' key={1}><Link to='/home' data-id='mNow'>NOW</Link></div>
          <div className='DtMenuItem' key={2}><Link to='/titles' data-id='mWork'>Work</Link></div>
          <div className='DtMenuItem' key={3}><Link to='/news' data-id='mNews'>News</Link></div>
          <div className='DtMenuItem' key={4}><Link to='/about' data-id='mAbout'>About</Link></div>
          {this.state.menu === 'mWork' ? dtSubMenu : null}
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
    y: state.mouse.y,
    filter: state.filter
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateFilter: updateFilter
  }, dispatch)
}

export const ConnectedDtMenu = connect(mapStateToProps, mapDispatchToProps)(DtMenu)
