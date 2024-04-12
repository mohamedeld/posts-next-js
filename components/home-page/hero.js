import React from 'react'
import classes from "./hero.module.css";
import Image from 'next/image';
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/ProfileImage.jpg" alt="An image showing mohamed" width={300} height={300}/>
      </div>
      <h1>Hi, I&lsquo;m Mohamed</h1>
      <p>welcome in programming world it is very nice world</p>
    </section>
  )
}
