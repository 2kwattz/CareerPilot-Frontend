import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import styles from './login.module.css'
import InfoButton from '../../components/InfoButton/infoButton';

export default function Login() {
    return (
        <React.Fragment>

            <div className={styles.container}>

            <Navbar></Navbar>

            <div className={styles.loginWrapper}>
                <div className={styles.loginWrapperLeft}>
                    <InfoButton text={'CareerHub'}/>

                   <p className={styles.cyanText}> Welcome Back </p>
                   <h2 className={styles.LoginHeading}>
                    Step back into your job search with clarity and momentum.
                   </h2>

                   <p>
                    Review saved opportunities, track applications, and keep your next move organized in one polished workspace.
                   </p>

                </div>

                <div className={styles.loginWrapperRight}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt, debitis deserunt nulla ipsa maxime rerum non facilis nesciunt sed officiis quibusdam, obcaecati itaque cum exercitationem! Odit ducimus cum aut quas qui necessitatibus ipsam magnam, molestiae excepturi modi fugit tempore, cupiditate repellendus voluptates quisquam quidem porro tenetur velit. Quam, qui.
                </div>
            </div>

            </div>



        </React.Fragment>
     
    );
}