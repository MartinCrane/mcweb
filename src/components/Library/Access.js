import React, { Component } from 'react';
import { Row,Clearfix } from 'react-bootstrap';
import PlaylistPlayer from './PlaylistPlayer.js'
class Access extends Component {

  render() {
          const playlist = {
                description: '',
                name: 'MC String Quartet Renderings',
                image: 'https://s3.amazonaws.com/www.martincrane.net/image/library/cell.jpg',
                songs: [{
                  link: 'https://s3.amazonaws.com/www.martincrane.net/audio/library/SQ1.m4a',
                  name: 'SQ 1',
                  number: 1,
                }, {
                  link: 'https://s3.amazonaws.com/www.martincrane.net/audio/library/SQ7.m4a',
                  name: 'SQ 7',
                  number: 2,
                }, {
                  link: 'https://s3.amazonaws.com/www.martincrane.net/audio/library/SQ9.m4a',
                  name: 'SQ 9',
                  number: 3,
                }, {
                  link: 'https://s3.amazonaws.com/www.martincrane.net/audio/library/MSQ1.m4a',
                  name: 'MSQ 1',
                  number: 4,
                }, {
                  link: 'https://s3.amazonaws.com/www.martincrane.net/audio/library/MSQ2.m4a',
                  name: 'MSQ 2',
                  number: 5,
                }, {
                  link: 'https://s3.amazonaws.com/www.martincrane.net/audio/library/MSQ3.m4a',
                  name: 'MSQ 3',
                  number: 6,
                }, {
                  link: 'https://s3.amazonaws.com/www.martincrane.net/audio/library/MSQ5.m4a',
                  name: 'MSQ 5',
                  number: 7,
                }]
              }
    return (
      <Row>
      <div style={{fontFamily: 'TradeGothicLTStd-Extended', paddingLeft: '5em', paddingBottom: '5em', }}>
      <h1>PDFs</h1>
      String Access<br></br>
    <a href='https://s3.amazonaws.com/www.martincrane.net/access/MSQ1-Full-Score.pdf'>MSQ1</a><br></br>
      <a href='https://s3.amazonaws.com/www.martincrane.net/access/MSQ2-Full-Score.pdf'>MSQ2</a><br></br>
      <a href='https://s3.amazonaws.com/www.martincrane.net/access/MSQ3-Full-Score.pdf'>MSQ3</a><br></br>

    <a href='https://s3.amazonaws.com/www.martincrane.net/access/MSQ5-Full-Score.pdf'>MSQ5</a><br></br>
      <a href='https://s3.amazonaws.com/www.martincrane.net/access/SQ1-Full-Score.pdf'>SQ1</a><br></br>
      <a href='https://s3.amazonaws.com/www.martincrane.net/access/SQ7-Full-Score.pdf'>SQ7</a><br></br>
      <a href='https://s3.amazonaws.com/www.martincrane.net/access/SQ9-Full-Score.pdf'>SQ9</a><br></br>
      </div>
      </Row>
    );
  }

}

export default Access;
