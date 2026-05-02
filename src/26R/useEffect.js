import { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Count: ${count}`);
    }, 2000);

    // Cleanup function - runs before next effect
    return () => {
      clearInterval(interval);
    };
  }, []);

  function Increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h4>Count: {count}</h4>
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export default UseEffect;