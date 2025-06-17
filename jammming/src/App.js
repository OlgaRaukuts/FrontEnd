//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';
import Spotify from './components/Spotify';
import styles from './App.module.css';

  const App = () => {
    const MOCK_TRACKS = [
      {
        id: 1,
        name: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        uri: 'spotify:track:0VjIjW4GlUZAMYd2vXMi3b'
      },
      {
        id: 2,
        name: 'Levitating',
        artist: 'Dua Lipa',
        album: 'Future Nostalgia',
        uri: 'spotify:track:39LLxExYz6ewLAcYrzQQyP'
      },
      {
        id: 3,
        name: 'As It Was',
        artist: 'Harry Styles',
        album: 'Harry’s House',
        uri: 'spotify:track:6A2l7r0R73m5q5a0w5T6wA'
      },
    ];
  
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

    const handleSearch = async () => {
    if (!query) return;
    const tracks = await Spotify.search(query);
    setSearchResults(tracks);
      
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
      <div>
      <h1 style={{display: "flex",
    justifyContent: "center",
    alignItems: "center", color: 'blueviolet'}}>Jammming 🎵</h1>
    
    
    <div style={{ marginBottom: '20px',display: "flex",
    justifyContent: "center",
    alignItems: "center" }}>
        <input
          type="text"
          placeholder="Enter a song name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} style={{marginLeft: '10px'}}>Search</button>
      </div>

      <h2 style={{display: "flex",
    justifyContent: "center",
    alignItems: "center", color: 'purple'}}>Search Results</h2>
      <Tracklist
        tracks={searchResults}
        onAdd={addTrack}
        isRemoval={false}
      />

      <Playlist
        name={playlistName}
        tracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}
      />
      <button onClick={savePlaylist} className={styles.buttonSpotify}>
      Save to Spotify
   </button>
    </div>
    );
  };

export default App;


/* hardcoded search 
const filtered = MOCK_TRACKS.filter(track =>
        track.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      */