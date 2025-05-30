import React from 'react';
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({tracks, onAdd}){
return(
<>
<div className={styles.tracklist}>
<div>
      <h2>Tracks</h2>
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
    <Tracklist tracks={tracks} onAdd={onAdd} isRemoval={false} />
    </div>
</>
);

}

export default Tracklist;