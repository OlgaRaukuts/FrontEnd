import React, {useState} from 'react';
import Pad from './components/Pad';
import padsData from "./pads";
import styles from './App.module.css';

function App() {
   const [pads, setPads] = useState(padsData)

   function toggle(id){
   setPads(prevPads =>
    prevPads.map(item =>
      item.id === id ? { ...item, on: !item.on } : item
    )
  );
   }

    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    return (
        <main>
            <div className={styles.padContainer}>
                {buttonElements}
            </div>
        </main>
    )
}

export default App;
