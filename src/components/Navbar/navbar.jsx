import React, {useEffect,useState} from "react";
import styles from './navbar.module.css';

// Assets

import Logo from '../../assets/logo.png'


function Navbar(){

    return (
    <React.Fragment>
        <div className={styles.navbarContainer}>
            <div className={styles.logoContainer}>
                <img src={Logo} style={{height:"50px"}}/>
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

        </div>

    </React.Fragment>

    )

}

export default Navbar;
