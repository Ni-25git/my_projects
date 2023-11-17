import React from 'react'
import styles from "../Css/DemoSessions.module.css"

const DemoSession = () => {
  return (
    <div className={styles.DemoSession}>
        <div className={styles.DemoSession1}>
        <h1>Book a 30-min live demo</h1>
        <img src="https://tse2.mm.bing.net/th?id=OIP.RxBvnTmTJu9kJEmpcm_IZAHaHa&pid=Api&P=0&h=180" alt="" />
        </div>
        <div className={styles.DemoSession2}>
            <p> 10+ users? Let one of our customer success experts show you how Everhour works, with plenty of time set aside for questions</p>
        </div>
        <div className={styles.DemoSession3}>
            <button className={styles.DemoSessionbtn1}>Schedule time</button>
            <button className={styles.DemoSessionbtn2}>Quick video</button>
        </div>

    </div>
    
  )
}

export default DemoSession
