import React from 'react';
import Track from "../Track/Track";
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ tracks, onAdd, onRemove, playlistTracks }) => (
    <div>
      <h2>Search Results</h2>
      <Tracklist
        tracks={tracks}
        onTrackAction={onAdd}
        onRemove={onRemove}
        playlistTracks={playlistTracks}
        isRemoval={false}
      />
    </div>
  );

export default Tracklist;