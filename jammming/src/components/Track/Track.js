 import React from 'react';
 import styles from './Track.module.css';
 
 function Track({track}){


            return (
    <div style={{ marginBottom: '1rem' }}>
      <p><strong>{track.name}</strong></p>
      <p>{track.artist} | {track.album}</p>
    </div>
  );
}


 export default Track;
 