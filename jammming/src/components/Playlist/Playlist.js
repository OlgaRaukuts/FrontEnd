import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

const Playlist = ({ name, tracks, onNameChange, onRemove, onSave }) => {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className={styles.Playlist}>
      <input 
        value={name} 
        onChange={handleNameChange} 
        className={styles.PlaylistInput} 
      />
      <Tracklist 
        tracks={tracks} 
        onRemove={onRemove} 
        isRemoval={true} 
      />
      <button 
        onClick={onSave} 
        className={styles.buttonSpotify}
      >
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist;