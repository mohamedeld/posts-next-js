import AllPosts from '@/components/posts/all-posts'
import React from 'react'
const DUMMY_POSTS = [
  {
    slug:'getting-started-with-nextjs',
    title:'Getting Started With Nextjs',
    image:'getting-started-nextjs.png',
    excerpt:'next js is a react framework for production and build a full stack react app',
    date:'2024-01-04'
  },
  {
    slug:'getting-started-with-nextjs1',
    title:'Getting Started With Nextjs',
    image:'getting-started-nextjs.png',
    excerpt:'next js is a react framework for production and build a full stack react app',
    date:'2024-01-04'
  },
  {
    slug:'getting-started-with-nextjs2',
    title:'Getting Started With Nextjs',
    image:'getting-started-nextjs.png',
    excerpt:'next js is a react framework for production and build a full stack react app',
    date:'2024-01-04'
  },
  {
    slug:'getting-started-with-nextjs3',
    title:'Getting Started With Nextjs',
    image:'getting-started-nextjs.png',
    excerpt:'next js is a react framework for production and build a full stack react app',
    date:'2024-01-04'
  },
]
export default function PostsPage() {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS}/>
    </>
  )
}
