import React , {useState}from 'react'


const Parent = () => {
    const [message, setMessage] = useState("Frontend");
    const chooseMessage = (message) => {
      setMessage(message);
    };
    return (
      <div>
        <h2>Parent to child data passing</h2>
        <h3>{message}</h3>
        <Child chooseMessage={chooseMessage} />
      </div>
    );
  };
  const Child = ({ chooseMessage }) => {
    let m = 'Full-Stack';
    return (
      <div>
        <button id="parent" onClick={() => chooseMessage(m)}>Click Me</button>
      </div>
    );
  };

  export default Parent;

 
  
  
  