 import React from 'react';
 import styles from "./Track.module.css";

     
 const Track = ({ track, onAdd, isRemoval, onRemove }) => {
    
    const handleAdd = () => {
        if (onAdd) {
          onAdd(track);
        }
      };

      const handleRemove = () => {
        if(onRemove) {
            onRemove(track);
        }
      }
    return (
      <div className={styles.trackContainer}>
        <div className={styles.trackInfo}>
        <h3 className={styles.trackName}>{track.name}</h3>
        <div className={styles.trackInfoLower}>
        <p className={styles.trackDetails}>{track.artist} | {track.album}</p>
        </div>
        </div>
        <div>
           {isRemoval ? (
  <button className={styles.trackButtonAdd} onClick={handleRemove}>–</button>
) : (
  <button className={styles.trackButtonRemove} onClick={handleAdd}>+</button>
)}
        </div>
       
      </div>
    );
  };
  
  export default Track;


