import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { elementFloat } from '../../actions/mouse'
import { Link } from 'react-router'

export default class LogoTop extends React.Component {

  constructor() {
    super()
    this.state = {
      left: 100,
      right: 700,
      top: 400,
      bottom: 600,
    }
    this.elementFloat = elementFloat.bind(this)
  }

  componentDidMount() {
    let specs = this.refs.Top.getBoundingClientRect()

    console.log(this.elementFloat())
  }

  render() {
    return (
      <div className='LogoTop elementFloat' ref='LogoTop'>
        <Link to='/'>
          <img
            className='center-block'
            ref='Top'
            syle={this.elementFloat()}
            alt='Martin Crane Logo'
            src={require('../../images/logo-outlined.png')}>
          </img>
          </Link>
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

export const ConnectedLogoTop = connect(mapStateToProps)(LogoTop)
