import React from 'react';
import { ConnectedTitleThumb } from './TitleThumb'
import { Row, Clearfix } from 'react-bootstrap';
import { filterDisplay } from '../../actions/filter'
import { connect } from 'react-redux'
import { elementFloat } from '../../actions/mouse'
import {Helmet} from "react-helmet";

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


  render() {
    let portfolio = this.filterDisplay(this.props.filter).map((title, index) => <ConnectedTitleThumb title={title} key={title.slug}></ConnectedTitleThumb>)
    return (
         <div className='TitleContainer'>
           <Helmet titleTemplate="%s | martincrane.net">
             <title>Work</title>
              <html lang="en" amp />
             <meta name="description" content="Helmet application" />
           </Helmet>
           <Row>
            {this.props.children || portfolio}
            <Clearfix/>
            </Row>
         </div>
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
