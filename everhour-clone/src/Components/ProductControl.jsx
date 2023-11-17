import React from 'react'
import styles from "../Css/ProductControl.module.css"
import Email from './Email'

const ProductControl = () => {
  return (
    <div className={styles.divv3}>
    <div className={styles.divleft3}>
        <h1>All-in-one time<br /> management<br/> software</h1>
        <p>Standalone or integrated into your project<br/> management software, accurate time tracker<br/> for budgeting, client invoicing and payroll</p>
        <Email />
    </div>
    <div className={styles.divright3}>
   <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/all-features-3.webp" alt="" />
    </div>
</div>
  )
}

export default ProductControl
