import React from 'react';
import Title from './Title'
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'

import { filterDisplay } from '../actions/filter'

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
  }

  render() {
    let portfolio = this.filterDisplay(this.props.filter).map((title, index) =>
                                                <div>
                                                  <Title title={title} key={index}/>
                                                </div>
                                              )
    return (
       <Grid className="TitleContainer leftFace">
         <Row >
             {portfolio}
         </Row>
      </Grid>
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
