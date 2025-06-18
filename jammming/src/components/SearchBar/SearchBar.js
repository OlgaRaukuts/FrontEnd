import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ query, onQueryChange, onSearch }) => (
  <div className={styles.searchContainer}>
    <input
      type="text"
      placeholder="Enter a song name"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      className={styles.input}
    />
    <button onClick={() => onSearch(query)} className={styles.button}>Search</button>
  </div>
);

export default SearchBar;