import React from 'react'
import styles from "../Css/Home.module.css"
import Email from '../Components/Email'
import Footer from '../Components/Footer'
import TimeControl from '../Components/TimeControl'
import Testimonial from '../Components/Testimonial'
import Partner from '../Components/Partner'
import ImageDiv from '../Components/ImageDiv'
import OptionalSS from '../Components/OptionalSS'

const Home = () => {
  return (
    <div>
    <div className={styles.Home}>
      <div className={styles.img}><img src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" height="100px" width="200px" alt="" /></div>
      <p className={styles.review}>4.75/5(600+ reviews)</p>
    </div>
    <div className={styles.main}>
      <h1>Free time tracking software and</h1>
      <h1>timesheets for teams</h1>
    </div>
    <div className={styles.left}>
      <p className={styles.para}>Time tracking app for effortless budgeting, invoicing and payroll.</p>
      <p className={styles.para}>Works natively with the apps your team already use</p>
    
     <Email />
    </div>
    <div className={styles.centre}>
      <img className={styles.img2} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRw79t2RxiQlm2cM_bdIlKes13yIwrxV--4nAqxDuaGJeXX3vNy" alt="" />
      <img className={styles.img2} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHWUjDofCBTaSu72Qrun9WCQZaeYwymYA497HEEN-8MCBiCxU-" alt="" />
      <img className={styles.img2} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScuJ7HzVsOq_VcTIVzQFbjulvQ_nY_-V8EOwr71RiZxSq-GVAF" alt="" />
      <img className={styles.img2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwLyEI1CjgpZ9Op0yjcRJ7ANZwuM8PzTztGe4zNuPWTgOqI_6" alt="" />
      <img className={styles.img2} src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9NsQA1opGzPHtWtGeZNV-hNG6n21ZObVmyY4aiP4Xl4Jvxbt0" alt="" />
      <img className={styles.img2} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRZvUoF8M3QmFjC_bFNVybgbAkUzm97cN4hQ7oVN8oytfY2-Uw" alt="" />
      <img className={styles.img2} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbJ_2ysmgv4_HPHf5HMUI7Q5B6VEqnjYWrE-DnocqTTOKqTGp7" alt="" />
      <img className={styles.img2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJZAO0zS3kgLlC9txazxqRyMS8TlpVfwgUA&usqp=CAU" alt="" />
    </div>
    <ImageDiv />
    <OptionalSS />
    <Partner />
    <Testimonial />
    <TimeControl />
    <Footer />
    </div>
  
    
  )
}

export default Home
