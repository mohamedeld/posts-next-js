import React from 'react'
import classes from "./post-content.module.css";
import PostHeader from './post-header';
const DUMMY_POST = {
    slug:'getting-started-with-nextjs',
    title:'Getting Started With Nextjs',
    image:'getting-started-nextjs.png',
    date:'2024-01-04',
    content:'# this is the first post'
  }
export default function PostContent() {
  const imagePath = `/images/posts/${image}`
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}/>

    </article>
  )
}
