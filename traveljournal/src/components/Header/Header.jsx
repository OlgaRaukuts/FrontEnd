import React from "react";
import styles from "../Header/Header.module.css";
import Image from "../Header/globe.png"

function Header(){
    return(
    <header className={styles.header}>
        <img src={Image} alt="globe icon" />
        <h1 className={styles.h1}>my travel journal</h1>
    </header>
    )
}


export default Header;