import React, { useState } from "react";
import styles from './navbar.module.css';
import { Link,useNavigate } from "react-router-dom";

// Assets

import Logo from '../../assets/logo.png'

function Navbar() {

    const navigate = useNavigate();

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="CareerPilot logo" className={styles.logo} />
        </div>

        <nav className={styles.navlinks}>
          <li className={styles.navlink}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navlink}>
            {/* <a href="/jobs">Jobs</a> */}
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className={styles.navlink}>
            <Link to="/community">Community</Link>
          </li>
          <li className={styles.navlink}>
           <Link to="/contactus">Contact Us</Link>
          </li>
        </nav>

        <div className={styles.authActions}>
          <button
            type="button"
            className={styles.loginBtn}
             onClick={() => navigate("/login")}
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
