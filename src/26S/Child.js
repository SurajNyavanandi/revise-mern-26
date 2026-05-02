import React,{useState} from 'react';

const Child=React.memo((props)=>{
    const {count,name,sendData,childF1}=props;
    const [friend,setFriend]=useState("Shree Rama");
    console.log("Child component re-rendering");
    return(<>
    <p className="h3 fw-bold text-success">Count:{count} Name:{name}</p>
    <p className="h3 fw-bold text-danger">Child Component-26</p>
    <button className="btn btn-primary" onClick={()=>{sendData(friend)}}>Send Data to Parent</button>
    <button className="btn btn-primary" onClick={childF1}>Child F1</button>
  </>)
});
export default Child;