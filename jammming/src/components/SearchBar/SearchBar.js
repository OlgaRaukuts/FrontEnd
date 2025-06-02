import React, {useState} from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const search = () => {
    onSearch(term);
  };


  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a song name"
        value={term}
        onChange={handleTermChange}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default SearchBar;



