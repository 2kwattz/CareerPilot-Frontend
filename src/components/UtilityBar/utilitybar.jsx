import React,{useEffect,useState} from "react";
import styles from './utilitybar.module.css'



const UtilityBar = () =>{


    return(
        <React.Fragment>


            <nav className={styles.utilityBar}>

        <div className={styles.utilityBarContent}>

            <span>Welcome to CareerPilot. Your one-stop destination for smarter job searching.</span>
    
         

        </div>
        
    </nav>
        </React.Fragment>
    )
}

export default UtilityBar;