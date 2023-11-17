import React from 'react'
import styles from "../Css/Testimonial.module.css"

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
        <div>
        <div className={styles.test1}>
            <p>“I am the owner of the company,<span className={styles.span1}> and I use Everhour for timekeeping 
                of myself and my subcontractors.</span> All team members use the system - from web
                 developers to tech support to project management to design.”</p>
                 <p>-Ivan M. [Source:<span className={styles.span2}>G2Crowd</span>] </p>
        </div>
        <div className={styles.test4}>
            <p><span className={styles.span1}>“We are using Everhour as a core business software,</span> because our business is to sell our 
                time. When you use such software, what you care about the most is speed, flexibility, 
                ability to integrate with all major project management software. And Everhour is exactly that kind of software</p>
                <p>— Ivan M. (Source: <span className={styles.span2}>G2Crowd</span>)</p>
        </div>
        <div className={styles.test7}>
            <p><span  className={styles.span1}>“Everhour’s integration with Asana is wonderful for a remote team.</span> We track all activities in Asana, but before 
                Everhour I often wondered how long it was taking to do a task, now I know exactly. I can see who is working right
                 now and a summary each day”.</p>
                 <p>— Doug H. (Source: <span className={styles.span2}>G2Crowd</span>)</p>
        </div>
        </div>

        <div>
        <div className={styles.test2}>
            <p>“Everhour is being used by my department now, but it’s planned to be used 
                across the whole company. We were having problems tracking the times of 
                every project<span  className={styles.span1}> and Everhour ended up being the best solution to the issue. </span>
                We’re tracking our tasks involved in every project, in every level 
                (software development, meetings, project management, etc.)”</p>
                <p>— Maria Lucia S. (Source:<span className={styles.span2}> TrustRadius</span>)</p>
        </div>
        <div className={styles.test5}>

         <p>“We are a 15 people team working remotely from different cities of Latin America and Europe,
             and time tracking for each client, project, and task has always been a major issue.<span  className={styles.span1}> We’ve been
              using Everhour for the past year or so, and it has become an essential tool for our team.</span> It does
               not only give us the ability to track how much time we have dedicated to a project but also to estimate 
             how much time a particular task will need in order to be completed next time and by who. Easily create
             and save reports with just a few clicks”</p>
             <p>— Daniel Y. (Source: <span className={styles.span2}> TrustRadius</span> )</p>
        </div>
        </div>

        <div>
        <div className={styles.test3}>
            <p><span  className={styles.span1}>“Everhour helps me manage/plan my weekly activities a lot more effectively,</span> 
                since I know how much time I have to work on things each day, and can quickly
                 update estimated times to reallocate tasks as needed.”</p>
                 <p>— Dan S. (Source: <span className={styles.span2}>Capterra</span>)</p>
        </div>
        <div className={styles.test6}>
            <p>“The most important gain from using Everhour is that<span className={styles.span1}> we can track our tasks 
                in real-time without having to leave the browser.</span> The Chrome add-on helps us
                 initiate the time for a specific task. If we are already on Asana, a simple click does the job.”</p>
                 <p>— Dimitris R. (Source: <span className={styles.span2}>Capterra</span>)</p>
        </div>
        <div className={styles.test8}>
            <p><span className={styles.span1}>“Everhour has already paid for itself for the year</span> by helping me track time I was missing in client projects.
                 It is easy to use, has friendly customer service people, and the reports make it easy to invoice clients and track projects.”</p>
                 <p>— Jennifer D. (Source: <span className={styles.span2}>TrustRadius</span>)</p>
        </div>
        </div>
    </div>
  )
}

export default Testimonial
