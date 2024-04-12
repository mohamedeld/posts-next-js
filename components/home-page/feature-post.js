import React from 'react'
import classes from "./featured-posts.module.css";
import PostsGrid from '../posts/posts-grid';
export default function FeaturePost({posts}) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}
