import { useState } from 'react';

function PostCard({ post }) {
  const [vote, setVote] = useState(0); // 1 = liked, -1 = disliked, 0 = neutral

  const handleLike = () => {
    setVote(vote === 1 ? 0 : 1); // toggle like
  };

  const handleDislike = () => {
    setVote(vote === -1 ? 0 : -1); // toggle dislike
  };

  return (
    <article className="postCard">
      <h2>{post.title}</h2>

      {post.hasImage && (
        <img
          src={post.thumbnail.replace(/&amp;/g, '&')}
          alt={post.title}
          style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '12px' }}
        />
      )}

      <p>by {post.author}</p>

      <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
        <button
          onClick={handleLike}
          style={{ color: vote === 1 ? 'green' : 'black' }}
        >
          👍 Like
        </button>

        <button
          onClick={handleDislike}
          style={{ color: vote === -1 ? 'red' : 'black' }}
        >
          👎 Dislike
        </button>
      </div>

      <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">
        View on Reddit
      </a>
    </article>
  );
}

export default PostCard;