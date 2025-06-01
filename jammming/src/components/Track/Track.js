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
    <div style={{ marginBottom: '1rem' }}>
      <p><strong>{track.name}</strong></p>
      <p>{track.artist} | {track.album}</p>
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
 