import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search for a song, artist, or album"
        onChange={handleChange}
        style={{ width: '300px', padding: '0.5rem' }}
      />
    </div>
  );
};

export default SearchBar;



