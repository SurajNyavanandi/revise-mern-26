import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';

const UseMemoAndCallback = () => {
  const [name, setName] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // ========== useMemo Example ==========
  // WITHOUT useMemo - recalculates every render
  const addWithoutMemo = (a, b) => {
    console.log("❌ Add (recalculates every render)");
    return a + b;
  };

  // WITH useMemo - caches value
  const sum = useMemo(() => {
    console.log("✅ useMemo (caches value)");
    return num1 + num2;
  }, [num1, num2]);

  // ========== useCallback Example ==========
  // WITHOUT useCallback - new function every render
  const multiplyWithoutCallback = (a, b) => {
    console.log("❌ Multiply (new function every render)");
    return a * b;
  };

  // WITH useCallback - same function reference
  const memoMultiply = useCallback(() => {
    console.log("✅ useCallback (same function)");
    return num1 * num2;
  }, [num1, num2]);

  // ========== Check Function References ==========
  const prevMultiply = useRef();
  const prevMemoMultiply = useRef();

  useEffect(() => {
    // Check multiply function
    if (prevMultiply.current === multiplyWithoutCallback) {
      console.log("✅ multiply: SAME reference");
    } else {
      console.log("❌ multiply: NEW function (different)");
    }
    prevMultiply.current = multiplyWithoutCallback;

    // Check memoMultiply function
    if (prevMemoMultiply.current === memoMultiply) {
      console.log("✅ memoMultiply: SAME function (cached!)");
    } else {
      console.log("❌ memoMultiply: NEW function");
    }
    prevMemoMultiply.current = memoMultiply;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Name: {name}</h2>

      {/* useMemo Section */}
      <h3>--- useMemo (Cache Values) ---</h3>
      <h2>Add (function): {addWithoutMemo(num1, num2)}</h2>
      <h2>Add (useMemo): {sum}</h2>

      {/* useCallback Section */}
      <h3>--- useCallback (Cache Functions) ---</h3>
      <h2>Multiply (function): {multiplyWithoutCallback(num1, num2)}</h2>
      <h2>Multiply (useCallback): {memoMultiply()}</h2>

      {/* Inputs */}
      <h3>--- Inputs ---</h3>
      <input 
        type="text" 
        placeholder="Type name"
        onChange={(e) => setName(e.target.value)} 
      />
      <br />
      <input 
        type="number" 
        placeholder="Num1"
        onChange={(e) => setNum1(Number(e.target.value))} 
      />
      <br />
      <input 
        type="number" 
        placeholder="Num2"
        onChange={(e) => setNum2(Number(e.target.value))} 
      />
    </div>
  );
};

export default UseMemoAndCallback;