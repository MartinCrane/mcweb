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
    const postText = `# ${this.props.blog.title} \r\n ${this.props.blog.body}`

    return (
      <div>
        <div className="PostThumb clearfix">
          <h1>
            <Link to={`news/${this.props.blog.slug}`}>
            </Link>
          </h1>
          {this.formatMarkdown(postText)}
          <p>
            {this.props.blog.date}
          </p>
        </div>
        <hr></hr>
      </div>
    );
  }

}

export default PostThumb;
