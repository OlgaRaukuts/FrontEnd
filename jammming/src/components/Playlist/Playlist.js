import React from 'react';
import Tracklist from '../Tracklist/Tracklist';


const Playlist = ({name, tracks, onNameChange, onRemove, onSave}) => {
    const handleNameChange = (e) => {
        onNameChange(e.target.value);
}
return(
<div>
      <input
        value={name}
        onChange={handleNameChange}
        style={{ fontSize: '1.2rem', marginBottom: '1rem' }}
      />
      <Tracklist tracks={tracks} isRemoval={true} onRemove={onRemove} />
      <button onClick={onSave}>💾 Save to Spotify</button>
    </div>
);

}

export default Playlist;