import React from 'react'
import styles from "../Css/TimeControl.module.css"
import Email from './Email'

const TimeControl = () => {
  return (
    <div className={styles.divv}>
        <div className={styles.divleft}>
            <h1>Take control of your time with Everhour</h1>
            <p>Beautiful integrations. Intuitive interface. No unexpected fees</p>
            <Email />
        </div>
        <div className={styles.divright}>
        <ul>
           <li>Track time from the apps you already use</li>
           <li>Know where your tema's time is going</li>
           <li>Keep projects on budget</li>
           <li>Increase Transparency</li>
           <li>Make your workflow more efficient</li>
           <li>Spot burnout before it happens</li>
        </ul>
        </div>
    </div>
  )
}

export default TimeControl
