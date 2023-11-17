import React from 'react'
import styles from "../Css/Footer.module.css"

const Footer = () => {
  return (
    
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <p>Company</p>
          <ul>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <p>Product</p>
          <ul>
            <li>Tour</li>
            <li>Pricing</li>
            <li>Request a demo</li>
            <li>Customers</li>
            <li>Blog</li>
            <li>Support docs</li>
            <li>Updates</li>
            <li>API & docs</li>
            <li>Status</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <p>Solutions</p>
          <ul>
            <li>Time tracking</li>
            <li>Timesheets</li>
            <li>Time clock</li>
            <li>Attendance tracker</li>
            <li>Screenshots</li>
            <li>Project budgeting</li>
            <li>Visual planning</li>
            <li>Expenses</li>
            <li>Reporting</li>
            <li>Invoicing</li>
            <li>Shift Scheduling</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <p>Integration</p>
          <ul>
            <li>Asana</li>
            <li>Basecamp</li>
            <li>Trello</li>
            <li>Jira</li>
            <li>GitHub</li>
            <li>ClickUp</li>
            <li>Monday</li>
            <li>Notion</li>
            <li>Todoist</li>
            <li>GitLab</li>
            <li>Asana vs Basecamp</li>
            <li>Asana vs trello</li>
            <li>Basecamp vs Trello</li>
            <li>All</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <p>Tools and resources</p>
          <ul>
            <li>Resources</li>
            <li>Time card calculator</li>
            <li>Weekly timesheet</li>
            <li>Invoice generator</li>
            <li>Online timer</li>
            <li>Pomodoro timer</li>
            <li>Trello power-up</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <p>Download</p>
          <ul>
            <li>Browser extension</li>
            <li>Screenshots app</li>
            <li>iPhone app</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <p>Compare</p>
          <ul>
            <li>vs Harvest</li>
            <li>vs Toggl</li>
            <li>vs Clockify</li>
            <li>vs Hubstaff</li>
            <li>vs Timecamp</li>
            <li>vs Paymo</li>
            <li>vs TMetric</li>
            <li>vs Timely</li>
            <li>vs Time Doctor</li>
            <li>vs RescueTime</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.bottom}>
        <p> &copy; 2023 Everhour</p>
        <p className={styles.p1}>GB</p>
        <p className={styles.p1}>DE</p>
        <p className={styles.p1}>FR</p>
        <p className={styles.p1}>ES</p>
        <p>Terms | Privacy  |Security | Cookies | Sitemap</p>
        </div>
        <div className={styles.socialMediaDiv}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.avatarLogo}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWGmKTZA7kO9jZLiIkcxmiZYI-fkbsAAnqA&usqp=CAU" alt="Facebook" />
        </div>
        <i className="fab fa-facebook"></i>
      </a>

      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.avatarLogo}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAonA7o0nzGQTvKVDwpNlMXhSXWNEq7ncw-Urw-_omDIgdFrA10n-KLyJNZb8yO2G1ew&usqp=CAU" alt="Twitter" />
        </div>
        <i className="fab fa-twitter"></i>
      </a>

      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.avatarLogo}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvs3M_57pr9mZQm4KXQ9lVEoyP3-wAkEEeBLALwiz_dUcqlE6VPPd3dS4Gyym3VfVpm-U&usqp=CAU" alt="LinkedIn" />
        </div>
        <i className="fab fa-linkedin"></i>
      </a>

      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.avatarLogo}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-b3hY52Ac-gWyhOmC7GvypnzJuzAgP5BJ60nLt4JakI7t_fQXluOaIJMREvxs1InzEk&usqp=CAU" alt="YouTube" />
        </div>
        <i className="fab fa-youtube"></i>
      </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
