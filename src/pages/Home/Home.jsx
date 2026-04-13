import React from 'react';

import styles from './home.module.css'
import UtilityBar from '../../components/utilitybar/utilitybar';
import Navbar from '../../components/Navbar/navbar';
import HomeCarousel from '../../components/HomeCarousel/homeCarousel';
import InfoCard from '../../components/InfoCard/infoCard';
import { Helmet } from "react-helmet";

export default function Home() {

    const homeInfoCardsInfo = [
        {
            title: "1,200+ live opportunities",
            description: "Fresh jobs and internships for tech, design, business, and operations."
        },
        {
            title: "Fast category browsing",
            description: "Jump straight into full-time jobs or internship openings with dedicated pages."
        },
        {
            title: "Designed for clarity",
            description: "Beautiful UI, strong hierarchy, and focused cards make scanning easy."
        }
    ]
    return (
        <React.Fragment>

            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className={styles.container}>
                <UtilityBar> </UtilityBar>

                <Navbar></Navbar>
                <HomeCarousel />

                <div className={styles.features}>

                    {homeInfoCardsInfo?.map((item, index) => {
                        return (
                            <div className={styles.homeInfoCard}>
                            <InfoCard title={item?.title} description={item?.description}>

                            </InfoCard>
                                </div>
                        )
                    })}
                </div>

            </div>


        </React.Fragment>
    );
}
