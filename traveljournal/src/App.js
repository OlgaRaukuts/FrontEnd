
import './App.css';
import Header from './components/Header/Header.js';
import Entry from './components/Entry/Entry.js';
import {data} from './data.js';



function App() {
  
  const entryElements = data.map((entry) => {
    return (
      <Entry
      key={entry.id} //important for the React projects (can be taken from id property of an object)
      {... entry}
    />
    )
})
console.log(entryElements);
  
  return (
    <div>
    <header>
       <Header />
    </header>
    <main className="container">
    {entryElements}
    </main>
  </div>
  );
}

export default App;




/* it could be done like this. for each property a prop
 <Entry
      key={entry.id} //important for the React projects (can be taken from id property of an object)
      image={entry.img.src}
      alt={entry.img.alt}
      h2={entry.title}
      markerName={entry.country}
      link={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />


    this is the Entry code itself

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
                <a href={props.link}
                target="_blank"
                rel="noopener noreferrer">View On Google Maps</a>
                <h2 className={styles.h2}>{props.title}</h2>
                <p className={styles.pDates}>{props.dates}</p>
                <p className={styles.p}>{props.text}</p>
            </div>
        </article>
    )
}

*/