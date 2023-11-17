import React, { useContext } from 'react';
import styles from "../Css/LoginEver.module.css";
import { useAppContext } from '../Context/AppContext';

const LoginEver = () => {
  const { loginUser } = useAppContext();

  const handleLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    loginUser({ email, password });
  };

  return (
    <div className={styles.LoginEver}>
      <h1>Log in to Everhour</h1>
      <div className={styles.LoginEver1}>
        <input type="text" placeholder="Login With Google" />
        <p>Or</p>
        <input id="email" type="text" placeholder="Enter your Email" /><br />
        <input id="password" type="password" placeholder="Password" /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginEver;
