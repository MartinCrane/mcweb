import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { formatMarkdown } from '../../actions/blog'
import { Link } from 'react-router'

class PostThumb extends Component {
  constructor() {
    super()
    this.formatMarkdown = formatMarkdown.bind(this)
  }
  render() {
    const postText = `# ${this.props.blog.title} \r\n ${this.props.blog.body} \r\n  #### _${this.props.blog.date_format}_`

    return (
      <Col xs={12} xsOffset={0} sm={12} md={12} lg={10} lgOffset={1}>
        <div className="PostThumb elementFloat">
          {this.formatMarkdown(postText)}
        </div>
      </Col>
    );
  }

}

export default PostThumb;
