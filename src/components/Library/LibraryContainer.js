import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PlaylistThumb from './PlaylistThumb.js'
import { connect } from 'react-redux'
import { elementFloat } from '../../actions/mouse'
import { playlists } from '../../data/playlists'

export default class LibraryContainer extends React.Component {


  render() {

    const playlistsComp = playlists.map((playlist, i) => <PlaylistThumb playlist={playlist}></PlaylistThumb>)

    return (
         <Row className='LibraryContainer elementFloat'>
           {playlistsComp}
         </Row>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y,
  }
}

export const ConnectedLibraryContainer = connect(mapStateToProps)(LibraryContainer)
