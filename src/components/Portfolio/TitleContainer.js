import React from 'react';
import TitleThumb from './TitleThumb'
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Route } from 'react-router';
import { filterDisplay } from '../../actions/filter'
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

  componentDidMount() {
    let specs = this.refs.TitleContainer.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {
    let portfolio = this.filterDisplay(this.props.filter).map((title, index) => <TitleThumb title={title} key={index}></TitleThumb>)
    return (
         <Row>
           <div ref='TitleContainer' className="elementFloat" style={this.elementFloat()} >
             {this.props.children || portfolio}
            </div>
         </Row>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    portfolio: state.portfolio,
    filter: state.filter
  }
}

export const ConnectedTitleContainer = connect(mapStateToProps)(TitleContainer)
