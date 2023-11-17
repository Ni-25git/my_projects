import React from 'react'
import styles from "../Css/FAQ.module.css"

const FAQ = () => {
  return (
    <div className={styles.FAQ}>
      <div className={styles.FAQ1}>
        <h1>Your qustions. Answered!</h1>
        <p>Here is a list of the most frequent asked questions.Got</p>
        <p>others or some ideas? - <span>Contact us!</span></p>
        <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp" alt="" />
      </div>
      <div className={styles.FAQ2}>
      <div className={styles.faqContainer}>
      <ul className={styles.faqList}>
        <li className={styles.faqItem}>
          <h2 className={styles.faqQuestion}>What's the trial period purpose?</h2>
          <p className={styles.faqAnswer}>When you sign up, you get a fully-functional
           account for 2 weeks, which gives you access to everything Everhour has to offer. 
           After 14 days, you will need to pick a plan and enter your credit card details. 
           We’ll email you a couple of days before your trial expires to remind you</p>
        </li>
        <li className={styles.faqItem}>
          <h2 className={styles.faqQuestion}>What means 'Starting at x users'?</h2>
          <p className={styles.faqAnswer}>This is kind of a basic usage fee. 
          You can subscribe even if you have fewer users, however, in this case,
           the minimum usage fee will apply. Lite plan starts at $10 and includes 
           2 users. Team plan starts at $42.5 and includes 5 users.</p>
        </li>
        <li className={styles.faqItem}>
          <h2 className={styles.faqQuestion}>Can I change my plan later?</h2>
          <p className={styles.faqAnswer}>Yes, you can upgrade your plan at any time.
           You will be credited for the remainder of your current plan and charged for your new plan when you upgrade.</p>
        </li>
        <li className={styles.faqItem}>
          <h2 className={styles.faqQuestion}>Can I add or remove members at any time?</h2>
          <p className={styles.faqAnswer}>Absolutely! Everhour is pay-as-you-go, and you
           can easily add or remove members from your account with a couple of clicks</p>
        </li>
        <li className={styles.faqItem}>
          <h2 className={styles.faqQuestion}>What if I want to cancel my service?</h2>
          <p className={styles.faqAnswer}>No problem. If you decide Everhour isn’t for
           you (or you just need to pause), simply cancel before your next billing period.
            This date is listed on your billing page. Unfortunately, we can’t refund you for
             partial use or the amount of time left in your subscription. Also, after cancelling,
              you can no longer subscribe to the legacy plans, only plans currently listed on our Pricing page 
         </p>
        </li>
        <li className={styles.faqItem}>
          <h2 className={styles.faqQuestion}>What kind of payment methods do you accept?</h2>
          <p className={styles.faqAnswer}>We currently accept any credit or debit card with a 
          MasterCard, Visa, Discover Network, American Express, Diners Club International or JCB logo.</p>
        </li>
        <li className={styles.faqItem}>
          <h2 className={styles.faqQuestion}>Which currency will I be charged in?</h2>
          <p className={styles.faqAnswer}>We charge you in US dollars. However, the debit currency depends on your card and your bank.</p>
        </li>
      </ul>
    </div>
      </div>
    </div>
  )
}

export default FAQ
