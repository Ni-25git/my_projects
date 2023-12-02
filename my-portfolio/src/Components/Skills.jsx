import React from 'react'
import styles from "../Css/Skills.module.css"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import chakra from "../assets/chakra.png"
import bootstrap from "../assets/bootstrap.png"
import react from "../assets/react.png"

const Skills = () => {
  return (
    <section id="skills">
      <div className={styles.skillContainer}>
        <span className={styles.Skill1}>Skills</span>
        <div className={styles.skillLi}>
        <div className={styles.Skill2}>
          <img src={html} alt="" className={styles.skillImg} />
          <h2 className={styles.skillName}>HTML</h2>
        </div>
        <div className={styles.Skill2}>
          <img src={css} alt="" className={styles.skillImg} />
          <h2 className={styles.skillName}>CSS</h2>
        </div>
        <div className={styles.Skill2}>
          <img src={javascript} alt="" className={styles.skillImg} />
          <h2 className={styles.skillName}>JavaScript</h2>
        </div>
        <div className={styles.Skill2}>
          <img src={react} alt="" className={styles.skillImg} />
          <h2 className={styles.skillName}>ReactJS</h2>
        </div>
        <div className={styles.Skill2}>
          <img src={bootstrap} alt="" className={styles.skillImg} />
          <h2 className={styles.skillName}>BootStrap</h2>
        </div>
        <div className={styles.Skill2}>
          <img src={chakra} alt="" className={styles.skillImg} />
          <h2 className={styles.skillName}>ChakraUI</h2>
        </div>
        </div>
      </div>
               
    </section>
  )
}

export default Skills
