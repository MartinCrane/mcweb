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
    const post = (
      
      <Row>
        <Col sm={0} md={1} lg={2}>
        </Col>
        <Col sm={12} md={10} lg={8}>
          <div className="PostThumb">
            <h1>
              <Link to={`news/${this.props.blog.slug}`}>
                {this.props.blog.title}
              </Link>
            </h1>
            <hr>
            </hr>
            {this.formatMarkdown(this.props.blog.body)}
            <p>
              {this.props.blog.date}
            </p>
            <hr>
            </hr>
          </div>
        </Col>
        <Col sm={0} md={1} lg={2}>
        </Col>
      </Row>
    )
    return (
      <div>
        {post}
      </div>
    );
  }

}

export default PostThumb;
