import React,{useState,useCallback,useMemo} from 'react';
import Child from './Child';
const Hooks=()=>{

    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [count,setCount]=useState(0);
//without use memo
    // const expenseCal=calculateSum(count);
    // console.log("Expense calucation is running ......");


    //with use memo is this is the real use case
    const result=useMemo(()=>{
           //console.log("Expense calucation is running ......");
           return calculateSum(count);
    },[count]);

    const handleClick=useCallback(()=>{
        console.log("Button clicked");
    },[]);

    const receiveData=useCallback((data)=>{
        console.log("Data received from child component:",data);
    },[]);


    return (<>
          <h4>Hooks-26</h4>
          <h3>Name :{name}</h3>
          <h3>Age :{age}</h3>
          <h3>Count :{count}</h3>
          <h3>Result:{result}</h3>
          <input placeholder='enter name' type="text" onChange={(e)=>setName(e.target.value)}/><br/>
            <input placeholder='enter age' type="number" onChange={(e)=>setAge(e.target.value)}/><br/>
          <button className="btn btn-primary" onClick={(e)=>setCount((count)=>count+1)}>Increment</button>
          <Child count={count} name={name} handleButtonClick={handleClick} onSendData={receiveData}/>

           </>)
};

function calculateSum(num){
    let sum=0;
    for(let i=0;i<num;i++){
          sum+=i;
    };
    //console.log("Calculating Sum..........");
    
    return sum;
}
export default Hooks;