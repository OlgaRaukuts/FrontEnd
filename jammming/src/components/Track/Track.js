 import React from 'react';

 
 function Track({track, onAdd, isRemoval, onRemove}){


    const handleAdd = () => {
        if(onAdd){
            onAdd(track);
        }
    }
    const handleRemove = () => {
        if(onRemove){
            onRemove(track);
        }
    }

            return (
                <div className={styles.track}>
                <div className={styles.trackInfo}>
                    <h2 className={styles.trackInfo_name}>{trackName}</h2>
                    <div className={styles.trackInfo_lower}>
                        <p className={`${styles.trackInfo_details}`}>
                            {artistName}
                        </p>
                        <p
                            className={`${styles.trackInfo_details} ${styles.trackInfo_spacer}`}
                        >
                            |
                        </p>
                        <p className={`${styles.trackInfo_details}`}>{albumName}</p>
                    </div>
                </div>
                
      {!isRemoval &&  (
        <button onClick={handleAdd}>➕ Add</button>
      )}
      {isRemoval && (
        <button onClick={handleRemove}>❌ Remove</button>
      )}
    </div>
  );
}


 export default Track;
 