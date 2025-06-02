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
        <div className={styles.trackInfo_lower}>
        <p className={styles.trackDetails}>{track.artist} | {track.album}</p>
        </div>
        </div>
        {isRemoval ? (
        <button className={styles.trackButton.remove} onClick={handleRemove}>–</button>
      ) : (
        <button className={styles.trackButton.add} onClick={handleAdd}>+</button>
      )}
      </div>
    );
  };
  
  export default Track;


