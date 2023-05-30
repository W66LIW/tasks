"use strict"
import React, {useState} from 'react';
import mutation from './functions/mutation';

const Mutation = () => {
    const [state, setState] = useState(false);
    const [arg, setArg] = useState({item0: "hello", item1: "he"});



    const code = state === true ? mutation.toString() : null;
    
    const f1 = (item, value) => {
        let state = {...arg};
        state[item] = value;
        setArg(state);        
    }

    console.log(arg);
    console.log("return: " + mutation([arg.item0, arg.item1]));


    return (
        
        <div>
            <button onClick={() => {setState(state === false ? true : false)}}>Mutation</button>
            <input 
            type="text" 
            value={arg.item0}
            onChange={event => f1('item0', event.target.value)}
            />
            <input 
            type="text" 
            value={arg.item1}
            onChange={event => f1("item1", event.target.value)}
            />

        <p><code>{code}</code></p><br />

        <p>return: <code>{""+mutation([arg.item0, arg.item1])}</code></p>
        
        {/* <div>{code}</div>
        <p>{code}</p>
        <span>{code}</span> */}
        
        </div>

    );

};

export default Mutation;

