import React from 'react'
import classes from "./all-posts.module.css";
import PostsGrid from './posts-grid';

export default function AllPosts({posts}) {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={posts}/>
    </section>
  )
}
