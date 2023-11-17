import React from 'react'
import {Link} from 'react-router-dom'
import styles from "../Css/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.div1}>
            <div><Link to="/home" className={styles.Link}><img className={styles.logo} src="https://clickup.com/images/integrations/everhour.png" alt="logo" /></Link></div>
            <div className={styles.div2}>
            <div><Link to="/products" className={styles.Link}>Products</Link></div>
            <div><Link to="/integration" className={styles.Link}>Integration</Link></div>
            <div><Link to="/pricing" className={styles.Link}>Pricing</Link></div>
            <div><Link to="/demo" className={styles.Link}>Demo</Link></div>
            </div>
        </div>
        <div className={styles.navCred}>
            <div><Link to="/login" className={styles.Link}><p>Login</p></Link></div>
            <div><Link to="/signup" className={styles.Link}><button className={styles.btn}>Signup</button></Link></div>
        </div>
    
     </div>
  )
}

export default Navbar
