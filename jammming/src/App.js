//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tracklist from '../src/components/Tracklist/Tracklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         Hello world!
         <Tracklist />
        </p>
        
      </header>
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