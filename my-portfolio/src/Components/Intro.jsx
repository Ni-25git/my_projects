import React from 'react'
import styles from "../Css/Intro.module.css"
import bg from "../assets/nipun2.png"

const Intro = () => {
  return (
    <section id="intro">
        <div className={styles.introContent}>
            <span className={styles.hello}>Hello,</span>
            <span className={styles.introText}>I'm <span className={styles.introName}>Nipun Sehrawat</span> <br />Website Designer</span>
            <p className={styles.introPara}>I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites.</p>
        </div>
        <img src={bg} alt="Portfolio" className={styles.bg} />
        
    </section>
  )
}

export default Intro
