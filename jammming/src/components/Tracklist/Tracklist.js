import React from 'react';
import "./TrackList.css";
import Track from './Track.js';


function Tracklist(props){
return(
<div className="TrackList">
      {props.tracks.map((track) => {
        return (
          <Track
          key={track.id}
          trackName={track.name}
          artistName={track.artist}
          albumName={track.album}
          trackPreview={track.previewUrl}
          handleClick={() => handlePlaylistManagement(track)}
          add={add}
          />
        );
      })}
    </div>
);

}

export default Tracklist;
/*When a user requests data from Spotify, the JSON response will contain a set of song tracks. Your Jammming web app should display the song name, artist, and album for each track in the results list.

Implement this by creating a unidirectional data flow from your root component. The root component should pass down the search results to a child component that will return each individual track to be rendered.

Since the Spotify API is not currently set up to be called, you may hard-code an array of track objects to be passed down for now.*/ 

/*Things to keep in mind:

Each hard-coded array of track objects should contain a name, artist, album, and id property.
Consider using state to store information such as your search results array, allowing you to update the array in response to user inputs and other events.
Use JavaScript’s map() method to iterate over arrays and render multiple components dynamically.
When returning the list of tracks, make sure to set a unique key attribute for each track. This will help React efficiently update the DOM when changes occur. */