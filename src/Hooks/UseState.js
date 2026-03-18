import {useState,useEffect,useRef,react} from 'react';

const UseStateComponent=()=>{

    console.log("Component.....");  
     const [count,setCount]=useState(0);
     const increment=()=>setCount(count+1);
     const decrement=()=>setCount(count-1);
     const reset=()=>setCount(0);


     const [data,setData]=useState(null);
    //It is throuwing infinite loop error while setting the data
    //  fetch("https://jsonplaceholder.typicode.com/users/1")
    //  .then((res)=>res.json())
    //  .then((data)=>setData(data));
    useEffect(()=>{
        console.log("Api Effect will run only once ");
        
    // fetch("https://jsonplaceholder.typicode.com/users/1")
    //  .then((res)=>res.json())
    //  .then((data)=>setData(data)); 
        
    },[]);

     useEffect(()=>{
      console.log("Effect Runs once only");

      
     },[]);

     useEffect(()=>{
      console.log("Effect runs when count modied");
      
     },[count])

     let inputRef=useRef(null);
     const submit=()=>{
            console.log("Ref Value",inputRef.current.value);
            inputRef.current.value='';
     }

    return (
     console.log("Return "),
     <>
    <h4>Count:{count}</h4>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button> 
    <button onClick={reset}>Reset</button><br/>
    <input type="text" ref={inputRef}/>
    <button onClick={submit}>Submit</button>
    <h4>{inputRef.current?.value || ''}</h4>
    </>)
};
export default UseStateComponent;