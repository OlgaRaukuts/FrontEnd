import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import './Post.css';
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from 'react-icons/ti';
import moment from 'moment';
import shortenNumber from '../../utils/shortenNumber';
import Card from '../../components/Card/Card';
import Comment from '../Comment/Comment';
import Avatar from '../Avatar/Avatar';

const Post = ({ post, onToggleComments }) => {
  const [voteValue, setVoteValue] = useState(0);

  const handleVote = (newValue) => {
    setVoteValue((prev) => (prev === newValue ? 0 : newValue));
  };

  const renderVoteIcon = (type) => {
    if (type === 'up') {
      return voteValue === 1 ? <TiArrowUpThick className="icon-action" /> : <TiArrowUpOutline className="icon-action" />;
    }
    return voteValue === -1 ? <TiArrowDownThick className="icon-action" /> : <TiArrowDownOutline className="icon-action" />;
  };

  const voteClass = voteValue === 1 ? 'up-vote' : voteValue === -1 ? 'down-vote' : '';

  const renderComments = () => {
    if (post.errorComments) {
      return <div><h3>Error loading comments</h3></div>;
    }

    if (post.loadingComments) {
      return (
        <div>
          {[...Array(3)].map((_, idx) => (
            <Skeleton key={idx} style={{ marginBottom: '8px' }} />
          ))}
        </div>
      );
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      );
    }

    return null;
  };

  const isImage = /\.(jpg|jpeg|png|gif|webp)$/.test(post.url);

  return (
    <article>
      <Card>
        <div className="post-wrapper">
          <div className="post-votes-container">
            <button
              type="button"
              className={`icon-action-button up-vote ${voteValue === 1 ? 'active' : ''}`}
              onClick={() => handleVote(1)}
              aria-label="Up vote"
            >
              {renderVoteIcon('up')}
            </button>

            <p className={`post-votes-value ${voteClass}`}>
              {shortenNumber(post.ups, 1)}
            </p>

            <button
              type="button"
              className={`icon-action-button down-vote ${voteValue === -1 ? 'active' : ''}`}
              onClick={() => handleVote(-1)}
              aria-label="Down vote"
            >
              {renderVoteIcon('down')}
            </button>
          </div>

          <div className="post-container">
            <h3 className="post-title">{post.title}</h3>

            {isImage && (
              <div className="post-image-container">
                <img src={post.url} alt={post.title} className="post-image" />
              </div>
            )}

            <div className="post-details">
              <span className="author-details">
                <Avatar name={post.author} />
                <span className="author-username">{post.author}</span>
              </span>

              <span>{moment.unix(post.created_utc).fromNow()}</span>

              <span className="post-comments-container">
                <button
                  type="button"
                  className={`icon-action-button ${post.showingComments ? 'showing-comments' : ''}`}
                  onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                >
                  <TiMessage className="icon-action" />
                </button>
                {shortenNumber(post.num_comments, 1)}
              </span>
            </div>

            {renderComments()}
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;