
import './App.css';
import Header from './components/Header/Header.jsx';
import Entry from './components/Entry/Entry.jsx';
import {data} from './data.js';



function App() {
  //const etnaImage = 'https://images.unsplash.com/photo-1570978999428-f17f4761d1c3?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  //const fujiImage = 'https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  
  
  const entryElements = data.map((entry) => {
    return (
        <Entry
            img={entry.img}
            title={entry.title}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text} />
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


/* 
<div>
          <Entry 
              image={fujiImage}
              alt="mount fuji"
              markerName="JAPAN"
              link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
              h2="Mount Fuji"
              dates="12 Jan, 2025 - 24 Jan, 2025"
              description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />
        </div>
        <div>
          <Entry 
              image={etnaImage}
              alt="mount etna"
              markerName="Italy"
              link="https://www.google.com/maps/place/Mt+Etna/@37.7518404,14.9844123,15z/data=!4m14!1m7!3m6!1s0x1316aa3714a7a0eb:0x1d0b042aa5c52a70!2sMt+Etna!8m2!3d37.7518413!4d14.994712!16zL20vMDE2cGRi!3m5!1s0x1316aa3714a7a0eb:0x1d0b042aa5c52a70!8m2!3d37.7518413!4d14.994712!16zL20vMDE2cGRi?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D"
              h2="Mount Etna"
              dates="12 Jul, 2025 - 24 Jul, 2025"
              description="Mount Etna, or simply Etna, is an active stratovolcano on the east coast of Sicily, Italy, in the Metropolitan City of Catania, between the cities of Messina and Catania."
                />
        </div>

*/