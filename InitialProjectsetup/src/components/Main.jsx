import React from "react";
import styles from './Main.module.css';

function Main(){
return(
<body className={styles.body}>
 <main className={styles.main}>
    <h1 className={styles.h1}>Fun facts about React</h1>
    <ul className={styles.facts}>
    <li className={styles.factsItems}>Was first released in 2013</li>
    <li className={styles.factsItems}>Was originally created by Jordan Walke</li>    
    <li className={styles.factsItems}>Has well over 200k stars on GitHub</li>
    <li className={styles.factsItems}>Is maintained by Meta</li>
    <li className={styles.factsItems}>Powers thousands of enterprises apps, including mobile apps</li>  
    </ul>
    
 </main>
</body>

    
)
}

export default Main;


/**
 * Challenge: Build out the main content section!
 * 
 * For now, skip 2 aspects of the design and we'll work on them later:
 *   1. The colored bullets in the list
 *   2. The larger gray React logo on the side
 */