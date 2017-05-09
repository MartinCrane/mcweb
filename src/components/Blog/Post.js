import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { formatMarkdown } from '../../actions/blog'

class Post extends Component {

  constructor() {
    super()
    this.formatMarkdown = formatMarkdown.bind(this)
  }

  render() {
    const post = (
          <div className="Post">
          </div>
    )
    return (
      <Row>
        {post}
      </Row>
    );
  }

}

export default Post;
