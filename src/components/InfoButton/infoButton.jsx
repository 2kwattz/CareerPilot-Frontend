import React from 'react';
import styles from './infoButton.module.css'

const InfoButton = ({text}) => {
    return (
      <button className={styles.buttonContainer}>
        {text}
      </button>
    );
};

export default InfoButton;