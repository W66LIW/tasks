"use strict"
import React, {useState} from 'react';


const SumAllNumbersInARange = (props) => {

    const [state, setState] = useState(false);
    const [arg, setArg] = useState([null, null]);


    const func = props.value[0];
    const code = state === true ? func.toString() : null;

    const handleChange = (i, value) => {
        let argCopy = [...arg];
        argCopy[i] = value;
        setArg(argCopy);
    }
   


    
    console.log("prop: " + props.value[0]);
    console.log(arg);
    console.log(func(arg));

    return (

        <div>
            <button onClick={() => {setState(state === false ? true : false)}}>{props.value[1]}</button>
            <input 
            type="text" 
            value={arg[0]}
            onChange={event => handleChange(0, event.target.value)}
            />
            <input 
            type="text" 
            value={arg[1]}
            onChange={event => handleChange(1, event.target.value)}
            />
            <p><code>{code}</code></p> <br />
            <p>return: <code>{""+func(arg)}</code></p>
            
             </div>
        
        
        // <div>
        //     <button onClick={() => {setState(state === false ? true : false)}}>Mutation</button>
            

        // <p><code>{code}</code></p><br />
        
        // {/* <div>{code}</div>
        // <p>{code}</p>
        // <span>{code}</span> */}
        
        // </div>

    );

};

export default SumAllNumbersInARange;

