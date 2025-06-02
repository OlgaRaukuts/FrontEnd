//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchResults from './components/SearchResults/SearchResults'
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';
import Spotify from './components/Spotify';

  const App = () => {
    const [searchResults] = useState([
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
    ]);
  
    const [playlistTracks, setPlaylistTracks] = useState([]);
  
    const addTrack = (track) => {
      if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return; // Track already in playlist
      }
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    };
  
    return (
      <div>
        <h1>Jammming</h1>
  
        <h2>Search Results</h2>
        <Tracklist tracks={searchResults} onAdd={addTrack} isRemoval={false} />
  
        <h2>My Playlist</h2>
        <Playlist playlistTracks={playlistTracks} />
      </div>
    );
  };

export default App;

