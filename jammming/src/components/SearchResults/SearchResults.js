import React from 'react';
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";


function Tracklist({tracks}){
return(
<>
<div className={styles.tracklist}>
<div>
      <h2>Tracks</h2>
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
    </div>
</>
);

}

export default Tracklist;