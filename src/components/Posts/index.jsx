import React from "react";
import { Post } from "./components/Post";
import * as SC from "./styles.js";

export const Posts = ({ posts }) => (
  <>
    <SC.Posts>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </SC.Posts>
  </>
);
