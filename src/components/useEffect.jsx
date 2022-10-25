import React, {useState ,useEffect} from 'react';
import "../App.css"

export default function Effeteg() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  } );

  return (
    <>
    <h2>useEffect:</h2>
    <p>useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</p>
    <p>useEffect accepts two arguments. The second argument is optional.</p>
    <p>useEffect(function, dependency)</p>
    <p>We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>
      <h3 id="q3h3">You clicked {count} times</h3>
      <button id="ue" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>  
  )
}