import React from 'react';
import { connect } from 'react-redux'
import { updateMouse, elementFloat } from '../../actions/mouse'
// import { elementFloat } from './actions/mouse'
import { bindActionCreators } from 'redux'
import { Clearfix } from 'react-bootstrap';
import { ConnectedLogoSlice } from './LogoSlice'
import { logoSliceLink } from '../../data/logoSliceLink'
import Spash from '../Splash'
// import { ConnectedLogoSlice } from './LogoSlice'

class Logo extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alpha: null,
      beta: null,
      gamma: null,
    }
    this.handleMouse = this.handleMouse.bind(this)
    this.elementFloat = elementFloat.bind(this)
    this.handleOrientation = this.handleOrientation.bind(this)
  }


  handleMouse(e) {
    this.props.updateMouse({
      x: e.clientX,
      y: e.clientY
    })
  }
  handleOrientation(e) {
    this.setState({
      beta: event.beta,
      gamma: event.gamma,
      alpha: event.alpha,

    })
  }

  componentWillUnmount() {
    window.removeEventListener("deviceorientation", this.handleOrientation)// React .14+
  }


  componentDidMount() {
    window.addEventListener("deviceorientation", this.handleOrientation)
    let specs = this.refs.Logo.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {
    const blinds = logoSliceLink.map((link, index) => <ConnectedLogoSlice link={link} key={index}/>)

    const logo = (<div
      className='Logo elementFloat'
      style={this.elementFloat()}>
      <a href="/work">
        <img
          ref='Logo'
          alt='Martin Crane Logo'
          src={require(`../../images/logo.jpg`)}>
        </img>
      </a>
    </div>)

    return (
      <div
        className="MainContent"
        onMouseMove={e => this.handleMouse(e)}>
        <div>
        </div>
        <Spash/>
        <div className="centeredBlinds">
          {blinds}
        </div>
        <Clearfix/>
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
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMouse: updateMouse
  }, dispatch)
}

export const ConnectedLogo = connect(mapStateToProps, mapDispatchToProps)(Logo)
