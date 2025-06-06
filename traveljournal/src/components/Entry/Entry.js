import React from "react";
import Image from './marker.png'
import styles from "../Entry/Entry.module.css";



function Entry(props){
    return(
        <article className={styles.article}>
            <div className={styles.div}>
                <img 
                className={styles.image}
                src={props.img.src} 
                alt={props.img.alt} />
            </div>
            
            <div className="info-container">
                <img 
                className={styles.imageMarker}
                src={Image} 
                alt="map marker icon"/>
                <span className={styles.span}>{props.country}</span>
                <a href={props.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer">View On Google Maps</a>
                <h2 className={styles.h2}>{props.title}</h2>
                <p className={styles.pDates}>{props.dates}</p>
                <p className={styles.p}>{props.text}</p>
            </div>
        </article>
    )
}

export default Entry;