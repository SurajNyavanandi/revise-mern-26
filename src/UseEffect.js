import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  //========== WITHOUT useEffect (INFINITE LOOP) ==========
  // Uncomment this to see infinite loop
  
//   console.log("Fetching data...");
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(res => res.json())
//     .then(data => setUser(data)); // This causes re-render → fetch runs again → infinite loop
  

  //========== WITH useEffect (SAFE) ==========
//   useEffect(() => {
//     console.log("Fetching data... (ONLY ONCE)");
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then(res => res.json())
//       .then(data => setUser(data));
//   }, []); // Empty [] = run ONLY ONCE

  return (
    <div>
      <h2>useEffect Example</h2>
      
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div>
        <h3>User Data:</h3>
        {user ? (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UseEffectHook;