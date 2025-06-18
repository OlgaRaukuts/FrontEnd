import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css'

const SearchResults = ({ tracks, onAdd, onRemove, playlistTracks }) => (
    <div className={styles.SearchResults}>
      <h2 className={styles.title}>Search Results</h2>
      <Tracklist
        tracks={tracks}
        onTrackAction={onAdd}
        onRemove={onRemove}
        playlistTracks={playlistTracks}
        isRemoval={false}
      />
    </div>
  );

export default SearchResults;