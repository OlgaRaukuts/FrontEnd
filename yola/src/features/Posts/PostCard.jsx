function PostCard({ post }) {
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
      <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">
        View on Reddit
      </a>
    </article>
  );
}

export default PostCard;