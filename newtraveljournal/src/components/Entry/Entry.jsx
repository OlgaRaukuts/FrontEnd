import React from "react";
import Image from './marker.png'
import styles from "../Entry/Entry.module.css";



function Entry(props){
    return(
        <article className={styles.article}>
            <div className={styles.div}>
                <img 
                className={styles.image}
                src={props.image} 
                alt={props.alt} />
            </div>
            
            <div className="info-container">
                <img 
                className={styles.imageMarker}
                src={Image} 
                alt="map marker icon"/>
                <span className={styles.span}>{props.markerName}</span>
                <a href={props.link}>View On Google Maps</a>
                <h2 className={styles.h2}>{props.h2}</h2>
                <p className={styles.p}>{props.dates}</p>
                <p className="entry-text">{props.description}</p>
            </div>
        </article>
    )
}

export default Entry;