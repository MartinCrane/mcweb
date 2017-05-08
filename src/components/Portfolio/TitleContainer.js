import React from 'react';
import { ConnectedTitleThumb } from './TitleThumb'
import { Row, Grid } from 'react-bootstrap';
import { Route } from 'react-router';
import { filterDisplay } from '../../actions/filter'
import { connect } from 'react-redux'
import { elementFloat } from '../../actions/mouse'

export default class TitleContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.filterDisplay = filterDisplay.bind(this)
    this.elementFloat = elementFloat.bind(this)
  }

  // componentDidMount() {
  //   let specs = this.refs.TitleContainer.getBoundingClientRect()
  //   this.setState({
  //     left: specs.left,
  //     right: specs.right,
  //     top: specs.top,
  //     bottom: specs.bottom
  //   })
  // }

  render() {
    let portfolio = this.filterDisplay(this.props.filter).map((title, index) => <ConnectedTitleThumb title={title} key={title.slug}></ConnectedTitleThumb>)
    return (
         <Row ref='TitleContainer' key='b'>
            {this.props.children || portfolio}
         </Row>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    portfolio: state.portfolio,
    filter: state.filter,
    x: state.mouse.x,
    y: state.mouse.y
  }
}

export const ConnectedTitleContainer = connect(mapStateToProps)(TitleContainer)
