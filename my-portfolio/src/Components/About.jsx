import React from 'react'
import styles from "../Css/About.module.css"

const About = () => {
  return (
    <section id="about">
        <div className={styles.About}>
            <span className={styles.Abt}>About Me</span><br /><br />
            <span className={styles.AbtName}>Nipun Sehrawat</span><br /><br />
            <span className={styles.Abtpara}>"As a proficient full-stack developer, I navigate the convergence of front-end finesse and back-end proficiency. Specializing in crafting  user-centric solutions, I contribute to the evolution of digital landscapes. From ideation to deployment, my dynamic approach to code  architecture ensures the creation of seamless and innovative digital experiences, marking a distinct imprint in the realm of technology."</span><br /><br />
            <span className={styles.AbtMail}>Drop a mail to <span className={styles.Abtemail}>nipunsherawat@gmail.com</span></span>

        </div>
    </section>
  )
}

export default About
