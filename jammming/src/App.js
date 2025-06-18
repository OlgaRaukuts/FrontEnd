import React, {useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';
import Spotify from './components/Spotify';
import styles from './App.module.css';
import Header from './components/Header/Header';

  const App = () => {
   
    const [query, setQuery] = useState('');
    const [playlistName, setPlaylistName] = useState('My Playlist');
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
  
    const addTrack = (track) => {
      if (playlistTracks.find(t => t.id === track.id)) return;
      setPlaylistTracks([...playlistTracks, track]);
    };
  
    const removeTrack = (track) => {
      setPlaylistTracks(playlistTracks.filter(t => t.id !== track.id));
    };
  
    const updatePlaylistName = (name) => {
      setPlaylistName(name);
    };

  
const handleSearch = (query) => {
   Spotify.search(query).then(results => {
  setSearchResults(results);
});
};

    const savePlaylist = () => {
      const trackUris = playlistTracks.map(track => track.uri);
      
      console.log('Saving playlist:', playlistName);
      console.log('Track URIs:', trackUris);

  // Reset playlist
  setPlaylistName('New Playlist');
  setPlaylistTracks([]);

    }

  
    return (
      <div className={styles.container}>
        <div className={styles.overlay}>
          <Header />
   <SearchBar query={query} onQueryChange={setQuery} onSearch={handleSearch} />
      
  <h2 className={styles.subtitle}>Search Results</h2>
 
 <div className={styles.columns}>
  <div className={styles.column}>
    <Tracklist
      tracks={searchResults}
      onAdd={addTrack}
      isRemoval={false}
    />
  </div>

<div className={styles.column}>
  <Playlist
    name={playlistName}
    tracks={playlistTracks}
    onRemove={removeTrack}
    onNameChange={updatePlaylistName}
    onSave={savePlaylist}   
  />
</div>

</div>
        </div>
    
    </div>
    );
  };

export default App;

