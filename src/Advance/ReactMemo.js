import React from 'react';
import { useState } from 'react';

const Parent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Parent - Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Child name="Jai Shree Rama"></Child>
    </>
  );
};

const Child = React.memo((props) => {
  console.log("Child rerendering");
  
  const { name } = props;
  return (
    <>
      <h1>Child</h1>
      <span>{name}</span>
    </>
  );
});

export default Parent;