import React from "react";
import Image from "../Entry/marker.png"
import styles from "../Entry/Entry.module.css";



function Entry(){
    return(
        <article className={styles.article}>
            <div className={styles.div}>
                <img 
                className={styles.image}
                src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDIwNjJ8MHwxfGFsbHx8fHx8fHx8fDE3MjMyMzUwNjR8&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="mount fuji"  />
            </div>
            
            <div className="info-container">
                <img 
                className={styles.imageMarker}
                src={Image} 
                alt="map marker icon"/>
                <span className={styles.span}>JAPAN</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View On Google Maps</a>
                <h2 className={styles.h2}>Mount Fuji</h2>
                <p className={styles.p}>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}

export default Entry;