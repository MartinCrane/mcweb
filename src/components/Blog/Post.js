import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'


class Post extends Component {

  render() {
    const test = (
      <Col sm={12} md={6} lg={6}>
        <div className="Post">
            <div className="TitleDetails">
              <h1>{this.props.blog.title}</h1>
              <h2>{this.props.blog.date} </h2>
              {this.props.blog.body}
            </div>
        </div>
      </Col>
    )
    return (
      <div>
        {test}
      </div>
    );
  }

}

export default Post;
