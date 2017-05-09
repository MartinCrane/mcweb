import React, { Component } from 'react';
import { Col, Clearfix } from 'react-bootstrap';
import { formatMarkdown } from '../../actions/blog'
import { connect } from 'react-redux'
import { shadowFloat, elementFloat, updateMouse } from '../../actions/mouse'
import { bindActionCreators } from 'redux'

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

  componentDidMount() {
    let specs = this.refs.Post.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
  }

  render() {
    const postText = `${this.props.blog.body} \r\n  ###### _${this.props.blog.date_format}_`

    return (
      <div className="case elementFloat" ref='Post' >
        <Col xs={12} xsOffset={0} sm={12} md={12} lg={10} lgOffset={1} >
          <div className="PostThumb elementFloat">
            <h1>{this.props.blog.title}</h1>
            {this.formatMarkdown(postText)}
            <Clearfix/>
          </div>
        </Col>
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
