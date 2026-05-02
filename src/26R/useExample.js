import {useState} from 'react';
function UseExampleComponent(){
    const [count,setCount]=useState(0);

    function increment(){
        setCount((prev)=>prev+1);
    };
    function decrement(){
        setCount((prev)=>prev-1);
    };
    function reset(){
        setCount(0);
    }
     
    return (<>
    <h5>Use Example Count : {count}</h5>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>)
};
export default UseExampleComponent;