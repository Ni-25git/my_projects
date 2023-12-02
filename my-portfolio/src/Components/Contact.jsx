import React from 'react'
import styles from "../Css/Contact.module.css"

const Contact = () => {
  return (
    <section id="contact">
    <div className={styles.contact}>
        <div className={styles.Contact1}>
        <span className={styles.Contactspan}>Contact</span><br />
        <div className={styles.contact2}>
        <i className={`fas fa-envelope ${styles.icon}`}></i>
        <h3>nipunsherawat@gmail.com</h3>
        </div>
        <div className={styles.contact2}>
        <i className={`fas fa-phone ${styles.icon}`}></i>
        <h3>8171339623,6395632064</h3>
        </div>
        <div className={styles.contact2}>
        <i className={`fab fa-github ${styles.icon}`}></i>
        <h3>Ni-25git</h3>
        </div>
        <div className={styles.contact2}>
        <i className={`fab fa-linkedin ${styles.icon}`}></i>
        <h3>Nipun Sehrawat</h3>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Contact
