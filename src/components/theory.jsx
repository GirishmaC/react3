import React from 'react'

export default function Theory() {
  return (
    <>
    <div>
    <h2>30. What is Context api</h2>
    <p>Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.</p>
   <p>This hook allows us to work with React's Context API, which itself a
          mechanism to allow us to share data within it's component tree without
          passing through props. Accepts a context object (the value returned
          from React.createContext) and returns the current context value for
          that context. The current context value is determined by the value
          prop of the nearest MyContext.Provider above the calling component in
          the tree.</p>
   <h2>31.Difference between callback and useCallback Hook ?</h2>
   <h4>UseCallback:</h4>
   <p> useCallback is a react hook that returns a memorized callback when passed a function and a list of dependencies that set the parameters. 
    It is useful when a component is passing a callback to its child component in order to prevent rendering. 
    It only changes the callback when one of its dependencies is changed.
    </p>
   <h4>callbacks:</h4> 
   <p>A callback is a function passed as an argument to another function.This technique allows a function to call another function.
        A callback function can run after another function has finished</p>
    <h2>32.What is Props Drilling Concept ?What is State Uplifting ?</h2>
    <h4>Props Drilling:</h4> 
    <p> Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.</p>
      <p> It is the process by which you pass data from one component of the
          React Component tree to another by going through other components that
          do not need the data but only help in passing it around.</p>
      <h4>State Uplifting:</h4>
<p>When several components need to share the same changing data then it
          is recommended to lift the shared state up to their closest common
          ancestor. That means if two child components share the same data from
          its parent, then move the state to parent instead of maintaining local
          state in both of the child components.
  </p>      
  <h2>33.Difference between useEffect and useContext ?</h2>
        <h4>useEffect</h4>
        <p>
          You’ve likely performed data fetching, subscriptions, or manually
          changing the DOM from React components before. We call these
          operations “side effects” (or “effects” for short) because they can
          affect other components and can’t be done during rendering.
        </p>
        <p>
          The Effect Hook, useEffect, adds the ability to perform side effects
          from a function component. It serves the same purpose as
          componentDidMount, componentDidUpdate, and componentWillUnmount in
          React classes, but unified into a single API. (We’ll show examples
          comparing useEffect to these methods in Using the Effect Hook.)
        </p>

        <h4>useContext</h4>
        <p>
          This hook allows us to work with React's Context API, which itself a
          mechanism to allow us to share data within it's component tree without
          passing through props. Accepts a context object (the value returned
          from React.createContext) and returns the current context value for
          that context. The current context value is determined by the value
          prop of the nearest MyContext.Provider above the calling component in
          the tree.
        </p>
    
    </div>

    </>
  )
}