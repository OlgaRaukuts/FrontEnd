import React, {useState} from "react";

function Pad(props){

    return (
        <button 
            style={{backgroundColor: props.on ? props.color : "#ccc"}}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
        ></button>
    )

}

export default Pad;