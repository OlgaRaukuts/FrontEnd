import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSubreddit, fetchPosts } from '../Posts/postsSlice';

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
    <form onSubmit={handleSubmit} className="searchBar">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search subreddit"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;