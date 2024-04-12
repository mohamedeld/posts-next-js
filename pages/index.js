
import FeaturePost from "@/components/home-page/feature-post";
import Hero from "@/components/home-page/hero";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
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
export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <FeaturePost posts={DUMMY_POSTS}/>
      </main>
    </>
  );
}
