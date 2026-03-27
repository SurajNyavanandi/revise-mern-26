import { useEffect, useState } from "react";
const UseStateComponent=()=>{
    //let count=0;
    const [count,setCount]=useState(0);
    const [arr,setArr]=useState([2,6]);
    const [obj,setObj]=useState({id:1,name:"abc"});
    const [data,setData]=useState({});

 const increment=()=>{
     setCount(count+1);
     setArr([...arr,count+1]);
 }
 useEffect(()=>{
    console.log("count",count);
    
 },[count,arr])
        return (<>
             <button onClick={increment}>Increment</button>
             <span>{count}</span>
             <span>{arr.map((item,index)=><span key={index}>{item}</span>) }</span>
        </>)
}
export default UseStateComponent;