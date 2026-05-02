import {useState} from 'react';

function useStatee(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');
    const [details,setDetails]=useState({
        food:'',
        price:0
    });
     
    function Increment(){
        setCount(count+1);
    }
    return(
        <>
         <h1>Count: {count}</h1> 
         <button onClick={Increment}>Increment</button>
         <h1>Name :{name}</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>   
        <h1>Food:{details.food}</h1><h1>Price:{details.price}</h1>
        <input type="text" onChange={(e)=>{setDetails({...details,food:e.target.value})}}/>
        <input type="number" onChange={(e)=>{setDetails({...details,price:e.target.value})}} />
        </>
    )
};
export default useStatee;