import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateMouse } from './actions/mouse'
import { ConnectedDtMenu } from './components/Menu/DtMenu'
import { ConnectedMobileMenu } from './components/Menu/MobileMenu'
import { elementFloat } from './actions/mouse'
import { ConnectedLogoTop}  from './components/Logo/LogoTop'
import {Helmet} from "react-helmet";

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.elementFloat = elementFloat.bind(this)
    this.handleMouse = this.handleMouse.bind(this)
  }

  handleMouse(e) {
    this.props.updateMouse({
      x: e.clientX,
      y: e.clientY
    })
  }


  render() {
    return (
      <div
        className="MainContent"
        onMouseMove={e => this.handleMouse(e)}>
        <Helmet titleTemplate="%s | martincrane.net"
          meta={[{ property: 'og:description', content: 'Martin Crane, NY based composer for TV and Film' }]}>
          <meta name="image" content="https://s3.amazonaws.com/www.martincrane.net/image/logo/logo.jpg"/>
          <meta name="keywords" content={ 'composer', 'about'} />
        </Helmet>


        <ConnectedLogoTop/>
          <div className='elementFloat ViewPort' >
            <ConnectedDtMenu/>
              <div className='Content'>
                {this.props.children}
              </div>
          </div>
        <ConnectedMobileMenu/>
      </div>
    )
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

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
