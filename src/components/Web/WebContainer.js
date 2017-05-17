import React from 'react';
import { ConnectedProject1 } from './Project1';
import { updateMouse, elementFloatX } from '../../actions/mouse'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export default class WebContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alpha: 0,
      beta: 0,
      gamma: 0,
      mobile:false
    }
    this.elementFloatX = elementFloatX.bind(this)
    this.handleMouse = this.handleMouse.bind(this)
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
      mobile:true
    })
  }
  componentDidMount() {
    window.addEventListener("deviceorientation", this.handleOrientation)
  }

  componentWillUnmount() {
    window.removeEventListener("deviceorientation", this.handleOrientation)// React .14+
  }

  render() {
    return (
      <div className='screen'>
        <div className='WebContainer' onMouseMove={e => this.handleMouse(e)}>

          <div className="WebProjects">
            <h1>404 PAGE NOT FOUND</h1>
            <h1><Link to='/'>Home</Link></h1>
          </div>
          <ConnectedProject1/>
          <ConnectedProject1/>
          <ConnectedProject1/>
          <ConnectedProject1/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMouse: updateMouse
  }, dispatch)
}
const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y
  }
}

export const ConnectedWebContainer = connect(mapStateToProps, mapDispatchToProps)(WebContainer)
