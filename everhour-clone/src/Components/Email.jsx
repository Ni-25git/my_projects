import React from 'react'
import styles from "../Css/Email.module.css"


const Email = () => {
  return (
    <div className={styles.right}>
      <div>
        <input className={styles.input} type="text" placeholder="Work email.." />
        <button className={styles.try}>Try Free</button>
      </div>
      <div className={styles.icon}>
       <img className={styles.img1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnzdX3VRWijmxegqAbqUBBPIU_175cRxsLA&usqp=CAU"  height="30px" width="30px" alt="" />
       <span className={styles.span}>Sign in with Google Account</span>
       </div>
      </div>
    
  )
}

export default Email
