import React from 'react';
import styles from "../CSS/Navbar.module.css"
import logo from "../assets/logo3.png";
import { Link } from "react-scroll"
import Nipun_Sehrawat from "../../public/nipun_resume.pdf";

const Navbar = () => {
    const openResume = () => {
        window.open(
          "https://drive.google.com/file/d/1wxuB0SJI0zQC83P-WmWVz1NhIYbzJwxE/view?usp=sharing", //resume link
          "_blank"
        );
      };

  return (
    <div className={styles.navbar}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.navlink}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className={styles.navlink1}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className={styles.navlink1}>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className={styles.navlink1}>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className={styles.navlink1}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className={styles.navlink1}>Contact</Link>
      </div>
      <a href={Nipun_Sehrawat} download="Nipun-Sehrawat-Resume">
        <button className={styles.resumebtn} onClick={openResume}>Resume</button>
      </a>
    </div>
  );
}

export default Navbar;
