import React from "react";
import Post from "./Post";
import "./Posts.css";
import {v1} from 'uuid'

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {
    posts.map((post) => {
      return(<Post post={post} key={v1()} likePost={likePost}/>)
    })
  }
    </div>
  );
};

export default Posts;