import React, { Component } from 'react';
import { Clearfix } from 'react-bootstrap';
import { formatMarkdown } from '../../actions/blog'
import { connect } from 'react-redux'
import { shadowFloat } from '../../actions/mouse'
import { Link } from 'react-router'

export default class PostThumb extends Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    this.formatMarkdown = formatMarkdown.bind(this)
    this.shadowFloat = shadowFloat.bind(this)
  }



  render() {
    const postText = `${this.props.blog.body} \r\n \r\n \r\n ###### _${this.props.blog.date_format}_`

    return (

        <div
          className="PostContainer">
          <div className="PostThumb elementFloatQuick">
            <h1><Link to={`/news/${this.props.blog.slug}`}>{this.props.blog.title}</Link></h1>
            {this.formatMarkdown(postText)}
            <Clearfix/>
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



export const ConnectedPostThumb = connect(mapStateToProps)(PostThumb)
