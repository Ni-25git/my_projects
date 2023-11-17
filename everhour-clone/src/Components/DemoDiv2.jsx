import React from 'react'
import styles from "../Css/DemoDiv2.module.css"

const DemoDiv2 = () => {
  return (
    <div className={styles.DemoDiv2}>
      <div className={styles.DemoDiv21}>
        <div className={styles.DemoDiv22}>
            <h2>What you’ll learn</h2>
            <ul>
             <li ><p className={styles.para4}>We’ll briefly explain what’s so special about Everhour.</p></li>
             <li><p className={styles.para4}>We’ll teach you the basics of using the app, with plenty of time for questions.</p></li>
             <li><p className={styles.para4}>We’ll answer all questions about setting up Everhour, using it with your team, or anything else you’d like to ask.</p></li>   
            </ul>
        </div>
        <div className={styles.DemoDiv23}>
            <h2>Other information</h2>
            <ul>
             <li ><p className={styles.para4}>Screenshare is done in the browser by means of Whereby software using this link. Please ensure that your mic and speakers work in advance!</p></li>
             <li><p className={styles.para4}>Demos typically last 30 minutes, but we will adjust the time based on your needs.</p></li>
             <li><p className={styles.para4}>Feel free to invite other team members to join this call.</p></li>  
             <li><p className={styles.para4}>No available time slots? Contact us and we'll surely work something out.</p></li>   
            </ul>
        </div>
      </div>
    </div>
  )
}

export default DemoDiv2
