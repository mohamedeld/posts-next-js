import React from 'react'
import classes from "./posts-grid.module.css";
import PostItem from './post-item';
export default function PostsGrid({posts}) {
  return (
    <ul className={classes.grid}>
      {posts.map(post=>{
        return (
          <PostItem key={post.slug} post={post}/>
        )
      })}
    </ul>
  )
}
