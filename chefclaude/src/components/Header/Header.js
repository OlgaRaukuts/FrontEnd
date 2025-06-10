import React from "react";
import Image from "../Header/chef-claude-icon.png";
import styles from "../Header/Header.module.css";

function Header(){
    return(
        <div className={styles.container}> 
            <header className={styles.header}>
            <img src={Image} alt="chef-icon" className={styles.image} />
            <h1 className={styles.h1}> Chef Claude</h1>
        </header>
        </div>
        
    );

}

export default Header;