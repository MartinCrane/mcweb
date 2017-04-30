import React from 'react';
import Title from './Title'
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import { elementFloat } from '../actions/mouse'

export default class TitleContainer extends React.Component {
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
    let specs = this.refs.TitleContainer.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {
    let portfolio = this.props.portfolio.map((title, index) =>
                                                <div>
                                                  <Title title={title} key={index}/>
                                                </div>
                                              )

    return (
      <div className="TitleContainer"
           ref='TitleContainer'>
           <Grid>
             <Row className="show-grid leftFace">
               {portfolio}
             </Row>
        </Grid>
      </div>

    );
  }
}
const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y,
    portfolio: state.portfolio
  }
}

export const ConnectedTitleContainer = connect(mapStateToProps)(TitleContainer)
