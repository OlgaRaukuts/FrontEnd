//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchResults from './components/SearchResults/SearchResults'
import SearchBar from './components/SearchBar/SearchBar';

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

  // Filter tracks based on search term
  const filteredTracks = tracks.filter(track =>
    track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar onSearch={setSearchTerm}/>
      <SearchResults tracks={tracks} />
    </div>
  );
}

export default App;


//Additionally, make sure that your interface has a Save To Spotify button and a Search button.
// <img src={logo} className="App-logo" alt="logo" />

/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */