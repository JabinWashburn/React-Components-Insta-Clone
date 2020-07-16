// You do not need to change this file.
import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Comment = props => {
  // Make sure the parent of Comment is passing the right props!
  const { coms } = props;
  console.log(props)
  return (
    <div className="comment-text">
      <span className="user">{coms.username}</span>
      {' '}
      <span className="comment">{coms.text}</span>
    </div>
  );
};


export default Comment;
