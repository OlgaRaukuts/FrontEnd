 import React from 'react';
 import styles from './Track.module.css';
 
 function Track({track, onAdd, isRemoval}){

    const handleAdd = () => {
        if(onAdd){
            onAdd(track);
        }
    }


            return (
    <div style={{ marginBottom: '1rem' }}>
      <p><strong>{track.name}</strong></p>
      <p>{track.artist} | {track.album}</p>
      {!isRemoval && (
        <button onClick={handleAdd}>➕ Add</button>
      )}
    </div>
  );
}


 export default Track;
 