import React, { useState } from 'react';
import { useAppContext } from '../Context/AppContext';  
import styles from "../Css/SignupDiv1.module.Css";

const SignupDiv1 = () => {
  const { signupUser } = useAppContext();

  const googleAccountLink = 'https://myaccount.google.com/';
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignup = () => {
    if (email) {
      signupUser({ email });
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className={styles.SignupDiv1}>
      <h1>Make your team more productive<br/> with Everhour</h1>
      <p>Join 8,000+ teams who use Everhour to track their time and run more profitable projects</p>
      <div className={styles.SignupDiv11}>
        <div className={styles.SignupDiv12}>
          <a href={googleAccountLink} target="_blank" rel="noopener noreferrer">
            <input type="text" className={styles.googleLogoInput} value="Sign Up with Google" readOnly />
          </a>
        </div>
        <p>Or</p> 
        <input
          className={styles.SignupDiv13}
          type="text"
          placeholder="Work Email..."
          value={email}
          onChange={handleEmailChange}
        />
        <button className={styles.btn6} onClick={handleSignup}>
          Sign Up for free
        </button>
      </div>
    </div>
  );
};

export default SignupDiv1;
