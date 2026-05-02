import React,{useState} from 'react';
const Child=React.memo((props)=>{

    const [friend,setFriend]=useState('Shree Rama');
    const {count,name,handleButtonClick,onSendData}=props;
    //now it is re-renderin g onmly when the name and count changes not when age changes 
    console.log("Child component re-rendering");

    const handleChild=()=>{
        onSendData(friend);
    }
    
    return(<>
    <h4>Child component</h4>
    <h3>Name :{name} Count :{count}</h3>
    <button className="btn btn-primary" onClick={handleButtonClick}>Click Me</button>
    <button className="btn btn-primary" onClick={handleChild}>Send Data to Parent</button>
    </>)
});
export default Child;