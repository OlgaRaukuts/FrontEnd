import Pad from './components/Pad';
import padsData from "./pads";
import styles from './App.module.css';
import React, {useState} from 'react';

function App() {
const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} />
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
