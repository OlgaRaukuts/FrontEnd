import padsData from "../pads";
import styles from '../App.module.css';
import React, {useState} from "react";

function Pad(){

    const [pads, setPads] = useState(padsData); 

    const buttonElements = pads.map(pad => (
    <button key={pad.id}></button>
  ))
return (
<main>
    <div className={styles.padContainer}>
                {buttonElements}
    </div>
</main>
);
}

export default Pad;