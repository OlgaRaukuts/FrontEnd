import styles from "../Header/Header.module.css";
import React, { useState, useEffect } from 'react';


function Header(){


    return(
        <div> 
            <header className={styles.header}>
            <h1 className={styles.h1}>YOLA</h1>
        </header>
        </div>
        
    );

}

export default Header;