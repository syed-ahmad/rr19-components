import React from 'react';

// Props to pass data from parent to child, to configure / customise child
const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="data">{props.timeAgo}</span>
      </div>
      <div className="text">{props.content}</div>
    </div>
  );
};

export default CommentDetail;
