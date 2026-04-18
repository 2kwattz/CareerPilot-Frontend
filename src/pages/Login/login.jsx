import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import styles from './login.module.css'
import InfoButton from '../../components/InfoButton/infoButton';

export default function Login() {

    async function handleSubmit() {
        console.log("Test HandleSubmit function")
    }
    return (
        <React.Fragment>

            <div className={styles.container}>

                <Navbar></Navbar>

                <div className={styles.loginWrapper}>
                    <div className={styles.loginWrapperLeft}>
                        <InfoButton text={'CareerHub'} />

                        <p className={styles.cyanText}> Welcome Back </p>
                        <h2 className={styles.LoginHeading}>
                            Step back into your job search with clarity and momentum.
                        </h2>

                        <p>
                            Review saved opportunities, track applications, and keep your next move organized in one polished workspace.
                        </p>

                        <div className='cards'>
                            <div>
                                <span>
                                    Saved roles
                                </span>

                            </div>

                            <div>

                                <span>
                                    Active applications
                                </span>

                            </div>

                            <div>
                                <span>
                                    Response tracking
                                </span>

                            </div>
                        </div>

                    </div>

                    <div className={styles.loginWrapperRight}>
                        <span>Member Access</span>

                        <h3>
                            Sign in to your dashboard
                        </h3>

                        <p>Pick up where you left off with saved roles and application tracking.</p>

                        <div className='formWrapper'>
                            <form onSubmit={handleSubmit}>
                              <br/>  <span>
                                    <label for="email">Email Address</label>
                                    <input type="email" name="email" />
                                </span>
                              <br/>  <span>
                                    <label for="password">Password</label>
                                    <input type="password" name="password" />

                                </span>

                                <button className='primaryButton'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>



        </React.Fragment>

    );
}