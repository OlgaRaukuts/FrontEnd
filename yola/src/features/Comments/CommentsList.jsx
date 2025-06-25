import { useEffect, useState } from 'react';

function CommentList({ permalink }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.reddit.com${permalink}.json`)
      .then((res) => res.json())
      .then((data) => {
        const commentData = data[1].data.children.map((c) => c.data);
        setComments(commentData);
        setLoading(false);
      });
  }, [permalink]);

  if (loading) return <p>Loading comments...</p>;

  return (
    <ul className="commentList">
      {comments.map((comment) => (
        <li key={comment.id}>
          <strong>{comment.author}</strong>: {comment.body}
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
