import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from './postsSlice';

function PostsList() {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className="mainFeed">
      {posts.map(post => (
        <div key={post.id} className="postCard">
          <h2>{post.title}</h2>
          <p>by {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;