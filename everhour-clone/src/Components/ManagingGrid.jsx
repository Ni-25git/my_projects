import React from 'react'
import styles from "../Css/ManagingGrid.module.css"

const ManagingGrid = () => {
  return (
    <div className={styles.TimeGrid}>
    <div className={styles.TimeGrid1}>
            <h2>Manage tasks</h2>
        <p>Create new tasks in seconds, set priorities,<br/> deadlines and assign to the team.</p>
    </div>
    <div className={styles.TimeGrid1}>
        <h2>Use sections and tags</h2>
        <p>Use tags and sections to organize, and add<br/> context, to your tasks</p>
    </div>
    <div className={styles.TimeGrid1}>
     <h2>List or Board views</h2>
        <p>Whether you prefer board or list views for your<br/> project tasks, we have you covered.</p>
    </div>
    <div className={styles.TimeGrid1}>
    <h2>Copy templates</h2>
        <p>Copy project with tasks and estimates to start<br/> new similar projects in minutes.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Estimates</h2>
        <p>Set time estimates so at any time you can see<br/> the time you spend and what is left.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Archive</h2>
        <p>Archive projects that you no longer need. We<br/> keep all time and data preserved.</p>
        </div>

</div> 
  )
}

export default ManagingGrid
