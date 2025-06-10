import padsData from './pads';
import styles from './App.module.css';
import React, {useState} from 'react';

function App() {

  const [pads, setPads] = useState(padsData);

  const buttonElements = pads.map(pad => (
    <button></button>
  ))
   return (
        <main>
            <div className={styles.padContainer}>
                {buttonElements}
            </div>
        </main>
    );
}

export default App;
