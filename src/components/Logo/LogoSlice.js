import React from 'react';
import { connect } from 'react-redux'
import { elementFloat } from '../../actions/mouse'

class LogoSlice extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.elementFloat = elementFloat.bind(this)
  }

  componentDidMount() {
    let specs = this.refs.Logo.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {
    return (
      <div
        className='Logo elementFloat'
        style={this.elementFloat()}>
        <img
          ref={`Logo${this.props.key}`}
          alt='Martin Crane Logo'
          src={require(`../../images/logo/${this.props.file}`)}>
        </img>
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

export const ConnectedLogoSlice = connect(mapStateToProps)(LogoSlice)
