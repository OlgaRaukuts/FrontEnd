import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from './postsSlice';
import PostCard from './PostCard';

function PostsList() {
  const dispatch = useDispatch();
  const { posts, status, error, activeSubreddit } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(activeSubreddit));
  }, [dispatch, activeSubreddit]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <div className='feedWrapper'>
      <div className="mainFeed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
    </div>
    
  );
}

export default PostsList;
