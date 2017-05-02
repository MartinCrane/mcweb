import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import ReactMarkdown  from 'react-markdown'
import Markdown from 'markdown-to-jsx';
import { formatMarkdown } from '../../actions/blog'


class Post extends Component {
  constructor() {
    super()
    this.formatMarkdown = formatMarkdown.bind(this)
  }
  render() {
    const test = (
      <div>
      <Col sm={0} md={0} lg={2}></Col>
      <Col sm={12} md={12} lg={8}>
        <div className="Post">
            <div className="TitleDetails">
              <h1>{this.props.blog.title}</h1>
              <h2>{this.props.blog.date} </h2>
              {this.formatMarkdown(this.props.blog.body)}
            </div>
        </div>
      </Col>
      <Col sm={0} md={0} lg={2}></Col>
      </div>
    )
    return (
      <div>
        {test}
      </div>
    );
  }

}

export default Post;
