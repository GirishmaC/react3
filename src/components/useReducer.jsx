import React,{useReducer} from 'react';

const initialstate=0;
const reducer=(state, action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialstate;
        default:
            return state;
    }
}
const Counter=()=>{
    const[count,dispatch]=useReducer(reducer,initialstate)
    return(
        <>
        <h2>useReducer:</h2>
        <p>The useReducer Hook returns the current stateand a dispatchmethod.</p>
        <p>useReducer Hook is similar to the useState Hook.It allows for custom state logic.</p>
       <p> If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</p>
       <p>useReducer(reducer, initialState)</p>
       <p>The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.</p>
       
        <h3>Count:{count}</h3>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>

        </>
    )
}
export default Counter;