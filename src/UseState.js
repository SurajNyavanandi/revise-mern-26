import { useState } from 'react';

function UseStateComponent(){
   //individual values using useState
    const [count,setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    const reset=()=>setCount(0);

    //multiple variable grouped together
   
    const [user,setUser]=useState({
        name:'',
        age:0,
        friend:""
    });

    const changeName=(newName)=>{
        setUser({...user,name:newName})
             
    }
    const changeAge=(newAge)=>{
        setUser({...user,age:newAge})
    }
    const changeName2=(e)=>{
        setUser({...user,name:e.target.value})
    }
  
 return (
        <>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <span>{count}</span>
        <input type="text" onChange={(event)=>changeName(event.target.value)}/>
        <input type="number" onChange={(event)=>changeAge(event.target.value)}/>
        <input type="text" onChange={(event)=>setUser({...user,friend:event.target.value})}/>
        <input type="text" onChange={changeName2} />
        <p>Name: {user.name}</p><p>Age: {user.age}</p><p>Friend: {user.friend}</p>
        </>
    )
};
export default UseStateComponent;