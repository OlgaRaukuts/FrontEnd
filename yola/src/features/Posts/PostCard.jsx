const [showComments, setShowComments] = useState(false);

return (
  <div className="postCard">
    <h2>{post.title}</h2>
    <p>by {post.author}</p>
    <button onClick={() => setShowComments(prev => !prev)}>
      {showComments ? 'Hide Comments' : 'View Comments'}
    </button>
    {showComments && <CommentList postId={post.id} permalink={post.permalink} />}
  </div>
);