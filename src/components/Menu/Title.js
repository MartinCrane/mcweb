import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router'

class Title extends Component {

  render() {
    const test = (
      <Col sm={12} md={6} lg={6}>
        <div className="Title">
          <img
            src={require(`../images/${this.props.title.imageUrl}`)}
            alt='title'>
          </img>
          <div className="TitleDetails">
            <h2>
              {this.props.title.name}
            </h2>
            <h2>
              {this.props.title.credit} / {this.props.title.year} / {this.props.title.author}
            </h2>
            <Link to={`/titles/${this.props.title.year}`}>link</Link>
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

export default Title;
