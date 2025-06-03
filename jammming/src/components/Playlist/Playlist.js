import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';


const Playlist = ({  name, tracks, onNameChange, onRemove }) => {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className={styles.playlist}>
      <input value={name} onChange={handleNameChange} style={{marginTop: '8px', marginBottom: '5px'}}/>
      <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true} />

    </div>
  );
};
export default Playlist;