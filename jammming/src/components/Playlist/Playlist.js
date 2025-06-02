import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';


const Playlist = ({ playlistTracks }) => {
  return (
    <div className={styles.playlist}>
      {playlistTracks.map(track => (
        <div key={track.id}>
          <h4>{track.name}</h4>
          <p>{track.artist} | {track.album}</p>
        </div>
      ))}
    </div>
  );
};
export default Playlist;