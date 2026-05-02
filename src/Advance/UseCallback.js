import { useState, useCallback, useRef } from "react";

const UseCallbackComponent = () => {
  const [renderCount, setRenderCount] = useState(0);
  const prevFunctionRef = useRef(null);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  const testFunction = () => {
    if (prevFunctionRef.current === handleClick) {
      console.log("✅ SAME function reference");
    } else {
      console.log("❌ DIFFERENT function reference");
    }
    prevFunctionRef.current = handleClick;
  };

  return (
    <>
      <h4>Use Callback</h4>
      <button onClick={testFunction}>
        Test Function
      </button>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Force Re-render ({renderCount})
      </button>
    </>
  );
};

export default UseCallbackComponent;