import React from 'react'
import styles from "../Css/BillingGrid.module.css"

const BillingGrid = () => {
  return (
    <div className={styles.TimeGrid}>
    <div className={styles.TimeGrid1}>
            <h2>Manage clients</h2>
        <p>Create clients, assign projects, watch budgets,<br/> spot uninvoiced time.</p>
    </div>
    <div className={styles.TimeGrid1}>
        <h2>Flexible billing</h2>
        <p>Choose an appropriate billing method: non-<br/> billable, time and materials or fixed fee.</p>
    </div>
    <div className={styles.TimeGrid1}>
     <h2>Budgets</h2>
        <p>Set up a capital or recurring budget for your<br/> projects. Don’t let finances catch you by surprise.</p>
    </div>
    <div className={styles.TimeGrid1}>
    <h2>Alerts</h2>
        <p>Receive an email alert when you reach a certain<br/> percentage of the project budget.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Labor costs</h2>
        <p>Track what an employee or contractor costs you<br/> compared to how much you charge for their<br/>work.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Non-billable time</h2>
        <p>Exclude certain tasks from the billable amount<br/> calculation.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Disallow overbudget</h2>
        <p>Budget settings allow you to prohibit reporting<br/> time for anyone if the budget is exceeded.</p>
        </div>
    <div className={styles.TimeGrid1}>
    <h2>Custom task rates</h2>
        <p>You can override the base rate for a project and<br/> assign a specific rate to each task.</p>
        </div>
    <div className={styles.TimeGrid1}>
        <h2>Budget visibility</h2>
        <p>Decide if members can see a project’s budget,<br/>which is visible to admins only by default.</p>
    </div>
</div> 
  )
}

export default BillingGrid
