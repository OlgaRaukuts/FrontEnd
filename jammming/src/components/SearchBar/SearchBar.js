import React, {useState} from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleTermChange = (e) => {
    setQuery(e.target.value);
  };

  const search = () => {
    onSearch(query);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Enter a song name"
        value={query}
        onChange={handleTermChange}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default SearchBar;



