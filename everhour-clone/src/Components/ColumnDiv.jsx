import React from 'react'
import styles from "../Css/ColumnDiv.module.css"

const ColumnDiv = () => {
  return (
    <div className={styles.ColumnDiv}>
        <div className={styles.ColumnDiv1}>
            <div className={styles.CD}>
            <h2>Free</h2>
            <p className={styles.para2}>Simple time tracking and reporting for freelancers and small teams</p>
            <p><span className={styles.num}>$0</span></p>
            <p>Free for up to 5 users</p>
            <button className={styles.BTN}>Get Started</button>
            <ul className={styles.ul2}>
                <li className={styles.li2}>Unlimited time tracking</li>
                <li className={styles.li2}>Unlimited projects</li>
                <li className={styles.li2}>Unlimited reports</li>
                <li className={styles.li2}>Add time for others</li>
                <li className={styles.li2}>Export reports</li>
                <li className={styles.li2}>Web, iOS app, browser extension</li>
            </ul>
            </div>
        </div>
        <div className={styles.ColumnDiv2}>
            <div className={styles.CD}>
        <h2>Lite</h2>
            <p className={styles.para2}>More control, more features yet at a very affordable price</p>
            <p><span className={styles.num}>$5</span></p>
            <p>/ user / month, starting at 2 users</p>
            <button className={styles.BTN}>Get Started</button>
            <h5>Everything in Free plan +</h5>
            <ul className={styles.ul2}>
                <li className={styles.li2}>Up to 10 users</li>
                <li className={styles.li2}>Works inside</li>
                <li className={styles.li2}>Clients</li>
                <li className={styles.li2}>Billable rates, costs, profit</li>
                <li className={styles.li2}>Budgets</li>
                <li className={styles.li2}>Invoicing</li>
                <li className={styles.li2}>Lock time entries at certain rules</li>
                <li className={styles.li2}>Reminders</li>
                <li className={styles.li2}>Schedule reports via email</li>
                <li className={styles.li2}>Fast and responsive support</li>
                <li className={styles.li2}>API</li>
            </ul>
            </div>
        </div>
        <div className={styles.ColumnDiv3}>
            <div className={styles.CD}>
        <h2>Team</h2>
            <p className={styles.para2}>For teams that need all features, plus best-in-class integrations</p>
            <p><span className={styles.num}>$8.50</span></p>
            <p>/ user / month, starting at 5 users</p>
            <button className={styles.BTN}>Get Started</button>
            <h5>Everything in Free plan +</h5>
            <ul className={styles.ul2}>
                <li className={styles.li2}>Unlimited users</li>
                <li className={styles.li2}>Works inside</li>
                <li className={styles.li2}>Time approval</li>
                <li className={styles.li2}>Clock-in, clock-out, breaks</li>
                <li className={styles.li2}>Time off</li>
                <li className={styles.li2}>Expenses</li>
                <li className={styles.li2}>Resource planner</li>
                <li className={styles.li2}>Timeline</li>
                <li className={styles.li2}>Invoice templates</li>
                <li className={styles.li2}>Jira bi-directional sync</li>
                <li className={styles.li2}>Custom admin permissions</li>
                <li className={styles.li2}>Detailed activity by member and project</li>
                <li className={styles.li2}>Optional screenshots</li>
                <li className={styles.li2}>Single sign-on (SSO)</li>
                <li className={styles.li2}>Folders in reports</li>
                <li className={styles.li2}>Priority support</li>
            </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ColumnDiv
