//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchResults from './components/SearchResults/SearchResults'
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';

function App() {
  const tracks = [
    {
        
      id: 332323324,
      name: "Beliver",
      artist: "Imagine Dragons",
      album: "Beliver"
    },
    {
      id: '1',
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      uri: 'spotify:track:0VjIjW4GlUZAMYd2vXMi3b'
    },
    {
      id: '123',
      name: 'Bad Habits',
      artist: 'Ed Sheeran',
      album: '= (Equals)',
      uri: 'spotify:track:6PQ88X9TkUIAUIZJhwNhtL'
    }]

    const [searchTerm, setSearchTerm] = useState('');
    const [tracklistItems, setTracklistItems] = useState([]);
    const [playlistName, setPlaylistName] = useState('New Playlist');
    
    const filteredTracks = tracks
    .filter(track =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.album.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(track =>
      !tracklistItems.find(playlistTrack => playlistTrack.id === track.id)
    );
  

  const addTrackToPlaylist = (track) => {
    setTracklistItems((prevTracks) => {
      if (prevTracks.find(savedTrack => savedTrack.id === track.id)) {
        return prevTracks; 
      }
      return [...prevTracks, track];
    });
  };

  const removeTrackFromPlaylist = (track) => {
    setTracklistItems((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = tracklistItems.map(track => track.uri);
  
    console.log("Saving playlist to Spotify...");
  
    console.log("Playlist Name:", playlistName);
  
    console.log("Track URIs:", trackUris);

    //reset playlist
    setPlaylistName('New Playlist');
    setTracklistItems([]);
  }
  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar onSearch={setSearchTerm} />
      <SearchResults
  tracks={filteredTracks}
  onAdd={addTrackToPlaylist}
  playlistTracks={tracklistItems}
/>
      <Tracklist tracks={tracklistItems} />
      <Playlist
        name={playlistName}
        tracks={tracklistItems}
        onNameChange={updatePlaylistName}
        onRemove={removeTrackFromPlaylist}
        onSave={savePlaylist}
      />
    </div>
  );
}

export default App;

