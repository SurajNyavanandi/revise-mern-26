import { useState, useEffect, useRef } from "react";

function UseRefComponent() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const count2 = useRef(0);

  // ❌ PROBLEM: Infinite loop (no dependency array)
  // useEffect(() => {
  //   setCount((prevCount) => prevCount + 1);
  //   setCount(count + 1);
  // });

  // ✅ SOLUTION: Use useRef (mutable, no re-render)
  useEffect(() => {
    count2.current = count2.current + 1;
  }); // No dependency array, but it won't cause re-render
    <>
      <h5>Use Ref</h5>
      <input type="text" ref={inputRef} />
      <button onClick={() => (inputRef.current.value = "Hello Ref")}>
        Change
      </button>

      <h5>Name: {name}</h5>
      <h5>Count (useState): {count}</h5>
      <h5>Count2 (useRef): {count2.current.value}</h5>
    </>
}

export default UseRefComponent;