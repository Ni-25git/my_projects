import React from 'react'
import styles from "../Css/Projects.module.css"
import ss from "../assets/SS1.jpg.png"

const Projects = () => {
    const githubRepoUrl = 'https://github.com/Ni-25git/my_projects/tree/main/everhour-clone';
    const websiteUrl = 'https://everhourclone23.netlify.app/';
  return (
    <section id="projects">
        <div className={styles.Projects}>
            <span className={styles.Projectspan}>Projects</span>
            <div className={styles.Projects1}>
               <img src={ss} alt="" className={styles.ssimg}/> 
               <h2 className={styles.Name}>Everhour Clone</h2>
               <p className={styles.para2}>Created the whole frontend of this Websites</p>
               <p className={styles.para3}>Tech stack -React|Node Js|Git</p>
               <div className={styles.projectBtn}>
                   <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                   <button className={styles.btn2}> Website</button>
                    </a>
              <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
              <button className={styles.btn2}>GitHub</button>
               </a>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
