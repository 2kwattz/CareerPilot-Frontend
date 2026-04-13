import React, { useState } from "react";
import styles from './navbar.module.css';

// Assets

import Logo from '../../assets/logo.png'

function Navbar() {
  const [authOpen, setAuthOpen] = useState(null);

  const isLogin = authOpen === 'login';

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="CareerPilot logo" className={styles.logo} />
        </div>

        <nav className={styles.navlinks}>
          <li className={styles.navlink}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navlink}>
            <a href="/jobs">Jobs</a>
          </li>
          <li className={styles.navlink}>
            <a href="/community">Community</a>
          </li>
          <li className={styles.navlink}>
            <a href="/contact-us">Contact Us</a>
          </li>
        </nav>

        <div className={styles.authActions}>
          <button
            type="button"
            className={styles.loginBtn}
            onClick={() => console.log("Login Pressed")}
          >
            Login
          </button>
          <button
            type="button"
            className={styles.registerBtn}
            onClick={() => console.log("Login Pressed")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
