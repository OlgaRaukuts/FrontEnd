//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchResults from './components/SearchResults/SearchResults'
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  const tracks = [
    {
        name: "Beliver",
        id: 332323324,
        artist: "Imagine Dragons",
        album: "Beliver"
    },
    {
        name: "In the end",
        id: 3323433324,
        artist: "Linkin Park",
        album: "In the end"
    },
    {
        name: "Immortal",
        id: 33234113324,
        artist: "Evanescence",
        album: "Immortal"
    }]

    const [searchTerm, setSearchTerm] = useState('');
    const [tracklistItems, setTracklistItems] = useState([]);

  // Filter tracks based on search term
  const filteredTracks = tracks.filter(track =>
    track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTrackToList = (track) => {
    if(!tracklistItems.find(savedTrack => savedTrack.id === track.id)) {
      setTracklistItems(prev => [...prev, track]);
    }
  };

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar onSearch={setSearchTerm} />
      <SearchResults tracks={filteredTracks} onAdd={addTrackToList} />
      <Tracklist tracks={tracklistItems} />
    </div>
  );
}

export default App;


