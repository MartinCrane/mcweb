import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { formatMarkdown } from '../../actions/blog'


class Post extends Component {
  constructor() {
    super()
    this.formatMarkdown = formatMarkdown.bind(this)
  }
  render() {
    const post = (
      <Row>
        <Col sm={0} md={0} lg={2}></Col>
        <Col sm={12} md={12} lg={8}>
          <div className="Post">
            <h1>{this.props.blog.title}</h1>
            <hr></hr>
            {this.formatMarkdown(this.props.blog.body)}
            <p>{this.props.blog.date} </p>
            <hr></hr>

          </div>
        </Col>
        <Col sm={0} md={0} lg={2}></Col>
      </Row>
    )
    return (
      <div>
        {post}
      </div>
    );
  }

}

export default Post;
