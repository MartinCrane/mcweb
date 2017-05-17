import React from 'react';
import { Row } from 'react-bootstrap';
import PlaylistPlayer from './PlaylistPlayer.js'
import { connect } from 'react-redux'
import { playlist2 } from '../../data/playlist2'
import { Helmet } from "react-helmet";

export default class LibraryContainer extends React.Component {

  render() {

    const playlistsComp = playlist2.map((playlist, i) => <PlaylistPlayer key={i} playlist={playlist}></PlaylistPlayer>)

    return (

        <Row className='LibraryContainer elementFloatQuick'>
          <Helmet titleTemplate="%s | martincrane.net">
            <title>Library</title>
             <html lang="en" amp />
            <meta name="description" content="Helmet application" />
          </Helmet>
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
