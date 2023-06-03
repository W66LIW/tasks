"use strict"
import React, {useState} from 'react';


const FuncComponent = (props) => {

    const [state, setState] = useState(false);
    const [input, setInput] = useState("");
    

    const func = props.value[0];
    const code = state === true ? func.toString() : null;
    

    //console.log("prop: " + props.value[0]);
    //console.log(input);
    //console.log("func returns: " + func(input));

    return (
        <div>
            <button onClick={() => {setState(state === false ? true : false)}}>{props.value[1]}</button>
            <input 
            type="text" 
            value={input}
            placeholder={props.value[2]}
            onChange={event => setInput(event.target.value)}
            />
            <p><code>{code}</code></p> <br />
            <p>return: <code>{JSON.stringify((func(input)))}</code></p>
            
             </div>
    );
};

export default FuncComponent;

