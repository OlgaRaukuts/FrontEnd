//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchResults from './components/SearchResults/SearchResults'
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';
import Spotify from './components/Spotify';

  const App = () => {
    const MOCK_TRACKS = [
      {
        id: 1,
        name: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
      },
      {
        id: 2,
        name: 'Levitating',
        artist: 'Dua Lipa',
        album: 'Future Nostalgia',
      },
      {
        id: 3,
        name: 'As It Was',
        artist: 'Harry Styles',
        album: 'Harry’s House',
      },
    ];
  
    const [term, setTerm] = useState('');
    const [playlistName, setPlaylistName] = useState('My Playlist');
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [searchResults, setSearchResults] = useState(MOCK_TRACKS);
  
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

    const handleSearch = () => {
      const filtered = MOCK_TRACKS.filter(track =>
        track.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filtered);
    };
  
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
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
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
    </div>
    );
  };

export default App;
