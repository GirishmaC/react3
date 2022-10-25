import React,{useState} from "react";
import '../App.css'


export default function Stateeg() {
    const[state ,setState]=useState(0);
const increment=()=>{
    setState(state + 1)
}
  return (
    <>
   <h2>useState:</h2>
   <p>useState Hook allows us to track state in a function component.</p>
   <p>We initialize our state by calling useState in our function component.
    useState accepts an initial state and returns two values: <br />
    1.The current state. <br />
    2.A function that updates the state.</p>

    <h3 id="q2h1">Counter:{state}</h3>
<button id="op" onClick={(increment)}> Increment</button>    
    
    </>
  )
}