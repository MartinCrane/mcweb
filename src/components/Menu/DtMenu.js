import React from 'react';
import { connect } from 'react-redux'
import NavLink from './NavLink'
import { elementFloat } from '../../actions/mouse'
import { updateWeb } from '../../actions/web'
import { bindActionCreators } from 'redux'
import { updateFilter } from '../../actions/filter'


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
      <div className='DtSubMenu fadeIn'>
        <h2
          data-filter='fAll'
          className={this.state.filter === 'fAll' ? 'sideActive' : null}>all</h2>
        <h2 className={this.state.filter === 'fScoring' ? 'sideActive' : null}>
          <b data-filter='fScoring'>scoring</b>
        </h2>
        <h2
          data-filter='fNarrative'
          className={this.state.filter === 'fNarrative' ? 'sideActive' : null}>narrative</h2>
        <h2
          data-filter='fDocumentary'
          className={this.state.filter === 'fDocumentary' ? 'sideActive' : null}>doc</h2>
        <h2
          data-filter='fCommercial'
          className={this.state.filter === 'fCommercial' ? 'sideActive' : null}>commercial</h2>
        <h2 className={this.state.filter === 'fOriginalMusic' ? 'sideActive' : null}>
          <b data-filter='fOriginalMusic'>
            original music
          </b>
        </h2>
        <h2
          data-filter='fProduction'
          className={this.state.filter === 'fProduction' ? 'sideActive' : null}>production</h2>
        <h2
          data-filter='fSongwriting'
          className={this.state.filter === 'fSongwriting' ? 'sideActive' : null}>songwriting</h2>
      </div>
    )

    return (
      <div
        id="menu"
        style={this.elementFloat()}
        ref='DtMenu'
        className={`DtMenu fadeIn elementFloat ${this.state.menu}`}
        onClick={e => this.handleClick(e)}>
        <div className='DtMenuItem'
          key={2}>
          <NavLink
            to='/work'
            data-id='mWork'>Work</NavLink>
        </div>
        <div
          className='DtMenuItem'
          key={3}>
          <NavLink
            to='/news'
            data-id='mNews'>News</NavLink>
        </div>
        <div
          className='DtMenuItem'
          key={5}>
          <NavLink
            to='/library'
            data-id='mLib'>Library</NavLink>
        </div>
        <div
          className='DtMenuItem'
          key={4}>
          <NavLink
            to='/about'
            data-id='mAbout'>About</NavLink>
        </div>
        {window.location.pathname === '/work' ? dtSubMenu : null}
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
    updateFilter: updateFilter,
    updateWeb: updateWeb
  }, dispatch)
}

export const ConnectedDtMenu = connect(mapStateToProps, mapDispatchToProps)(DtMenu)
