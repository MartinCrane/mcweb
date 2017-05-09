import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import TitlePlayer from './TitlePlayer'
import { connect } from 'react-redux'
import { elementFloat } from '../../actions/mouse'


export default class TitleThumb extends Component {
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

  render() {
    const test = (
        <div className="TitleThumb elementFloat" >
          <div className='thumbImage'>
            <img
              src={`https://s3.amazonaws.com/www.martincrane.net/image/${this.props.title.imageUrl}`}
              alt='title'>
            </img>
          </div>
          <div className='pseudoAbs'>
            {this.props.title.scId ? <TitlePlayer songUrl={this.props.title.scId}/> : <div className='none TitlePlayer'></div>}
          </div>
          <div className="thumbDetails">
            <h2>
              {this.props.title.name}
            </h2>
            <h2>
              {this.props.title.credit} / {this.props.title.year} / {this.props.title.author}
            </h2>
          </div>
        </div>
    )
    return (
      <div>
        <Col sm={12} md={12} lg={6}>
          {test}
        </Col>
      </div>
    );
  }

}


const mapStateToProps = (state) =>{
  return{
  }
}

export const ConnectedTitleThumb = connect(mapStateToProps)(TitleThumb)
