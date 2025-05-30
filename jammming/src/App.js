//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tracklist from '../src/components/Tracklist/Tracklist';

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

  return (
    <div>
      <h1>Jammming</h1>
      <Tracklist tracks={tracks} />
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