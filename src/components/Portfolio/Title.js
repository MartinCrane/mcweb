import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Title extends Component {

  render() {
    const test = (
        <div className="Title">
            <div className="TitleDetails">
            <h1>hfghjfghj</h1>
            <h1>hfghjfghj</h1>
            <h1>hfghjfghj</h1>
            <h1>hfghjfghj</h1>
            <h1>hfghjfghj</h1>
            <h1>hfghjfghj</h1>
            <h1>hfghjfghj</h1>
            <h1>hfghjfghj</h1>
              <h2>{this.props.params.name}</h2>
            </div>
        </div>
    )
    return (
      <div>
        {test}
      </div>
    );
  }

}

export default Title;
