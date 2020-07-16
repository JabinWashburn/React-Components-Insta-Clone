import React from 'react';
import Comment from './Comment';
import './Comments.css';
import { v1 } from 'uuid';


const Comments = props => {
  // Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(comments)
  return (
    <div>
     {
    comments.map((coms) => {
      return(<Comment coms={coms} key={v1()}/>)
    })
  }
    </div>
  );
};

export default Comments;
