import React from 'react';
import { Col } from 'react-bootstrap';


export default class PlaylistThumb extends React.Component {

  render() {
    function createMarkup(html) {
      return {__html: html};
    }

    return (
      <Col
        sm={12}
        md={12}
        lg={6}
        className='PlaylistCard'>
        <h1>
          {this.props.playlist.name}
        </h1>
        <p>
          {this.props.playlist.description}
        </p>
        <div
          className='elementFloat'
          dangerouslySetInnerHTML={createMarkup(this.props.playlist.html)} />
      </Col>
    );
  }
}
