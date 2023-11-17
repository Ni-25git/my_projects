import React from 'react'
import styles from "../Css/TimeGrid.module.css"

const TimeGrid = () => {
  return (
    <div className={styles.TimeGrid}>
    <div className={styles.TimeGrid1}>
            <h2>Seamless integrations</h2>
        <p>Track time right inside the most popular apps,<br/> such as Asana, Basecamp, Jira, Trello, GitHub,<br/> ClickUp and more.</p>
    </div>
    <div className={styles.TimeGrid1}>
        <h2>Timer or manual entry</h2>
        <p>Start and stop your timer to record activities as<br/> you work. Or log hours manually afterwards.</p>
    </div>
    <div className={styles.TimeGrid1}>
     <h2>Clock-in, clock-out</h2>
        <p>Know the time spent on projects as well as<br/> hours of work and breaks.</p>
    </div>
    <div className={styles.TimeGrid1}>
    <h2>Estimates</h2>
        <p>Set time estimates so at any time you can see<br/> the time you spend and what is left.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Reminders</h2>
        <p>Receive notifications about long-running timers<br/> and reminders to track time.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Time off</h2>
        <p>Track paid time off, vacations, sick days and<br/> leave types.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Auto-stop timer</h2>
        <p>Configure to auto stop timer at the end of the<br/> workday.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Time log</h2>
        <p>All changes and estimates made to the task time<br/> are logged and available for revision.</p>
        </div>
    <div className={styles.TimeGrid1}>
        <h2>Automate with Zapier</h2>
        <p>Use Zapier for automatic data transfer between<br/> Everhour and 1000+ apps with no technical<br/>knowledge.</p>
    </div>
    <div className={styles.TimeGrid1}>
        <h2>Browser extension</h2>
        <p>Track time right from your browser’s toolbar<br/> with a single click.</p>
    </div>
    <div className={styles.TimeGrid1}>
        <h2>iPhone app</h2>
        <p>Record time spent on projects and tasks from<br/> your iPhone.</p>
    </div>
</div> 
  )
}

export default TimeGrid
