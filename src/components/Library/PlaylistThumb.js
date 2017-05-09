import React from 'react';


export default class PlaylistThumb extends React.Component {

  render() {
    function createMarkup(html) {
      return {__html: html};
    }

    return (
         <div className='PlaylistCard'>
            <h1>{this.props.playlist.name}</h1>
            <p>{this.props.playlist.description}</p>
            <div className='elementFloat' dangerouslySetInnerHTML={createMarkup(this.props.playlist.html)} />
         </div>
    );
  }
}
