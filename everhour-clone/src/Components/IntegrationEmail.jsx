import React from 'react'
import styles from "../Css/LoginEmail.module.css"

const IntegrationEmail = () => {
  return (
    <div className={styles.right1}>
    <h1>Make your team more productive with Everhour</h1>
    <p>Try Everhour for free and see if it works for your business</p>
<div>
  <input className={styles.input1} type="text" placeholder="Work email.." />
  <button className={styles.try1}>Try Free</button>
</div>
<div className={styles.icon1}>
 <img className={styles.img23} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnzdX3VRWijmxegqAbqUBBPIU_175cRxsLA&usqp=CAU"  height="30px" width="30px" alt="" />
 <span className={styles.span1}>Sign in with Google Account</span>
 </div>
</div>
  )
}

export default IntegrationEmail
