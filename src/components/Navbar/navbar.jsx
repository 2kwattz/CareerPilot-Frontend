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
            onClick={() => setAuthOpen(authOpen === 'login' ? null : 'login')}
          >
            Login
          </button>
          <button
            type="button"
            className={styles.registerBtn}
            onClick={() => setAuthOpen(authOpen === 'register' ? null : 'register')}
          >
            Register
          </button>
        </div>
      </div>

      {authOpen && (
        <div className={styles.authPanel}>
          <div className={styles.authHeader}>
            <div>
              <p className={styles.authLabel}>Welcome back</p>
              <h3>{isLogin ? 'Quick sign in' : 'Create your account'}</h3>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setAuthOpen(null)}
            >
              ×
            </button>
          </div>

          <form className={styles.authForm} onSubmit={(event) => event.preventDefault()}>
            <input className={styles.authInput} type="email" placeholder="Email address" />
            <input className={styles.authInput} type="password" placeholder="Password" />
            {!isLogin && (
              <input className={styles.authInput} type="password" placeholder="Confirm password" />
            )}
            <button className={styles.submitBtn} type="submit">
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Navbar;
