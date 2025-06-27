import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSubreddit, fetchPosts } from '../Posts/postsSlice';
import styles from "./SearchBar.module.css"

function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      dispatch(setActiveSubreddit(term.trim()));
      dispatch(fetchPosts(term.trim()));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search subreddit"
        aria-label="Search posts"
      />
      <button type="submit" aria-label="Search" onClick={handleSubmit} >Search</button>
    </form>
  );
}

export default SearchBar;