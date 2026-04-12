import React from 'react';

import styles from './home.module.css'
import UtilityBar from '../../components/utilitybar/utilitybar';
import Navbar from '../../components/navbar/navbar';
import HomeCarousel from '../../components/HomeCarousel/homeCarousel';
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <React.Fragment>

            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className={styles.container}>
                <UtilityBar> </UtilityBar>

                <Navbar></Navbar>
                <HomeCarousel />

            </div>


        </React.Fragment>
    );
}
