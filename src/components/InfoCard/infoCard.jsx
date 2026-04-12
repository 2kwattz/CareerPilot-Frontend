import React from 'react';
import styles from './infoCard.module.css'

export default function InfoCard({ title, description, icon }) {
    return (
        <div className={styles.InfoCard}>
            {icon && <div className={styles.InfoCardIcon}>{icon}</div>}
            <h3 className={styles.InfoCardTitle}>{title}</h3>
            <p className={styles.InfoCardDescription}>{description}</p>
        </div>
    );
}