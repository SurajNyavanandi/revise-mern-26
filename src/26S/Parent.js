import React,{useState,useMemo,useCallback} from 'react';
import Child from './Child';
import { Link ,useNavigate,useParams} from 'react-router-dom';

const Parent=()=>{
    const navigate=useNavigate();
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
  const {id}=useParams();
console.log("Parent re-rendering");
 
const m2=mul(count);


  const result=useMemo(()=>{
       return mul(count);
  },[count]);

  const f1=useCallback(()=>{
    console.log("F1");
  },[]);

    const receiveData=useCallback((data)=>{
        console.log("Data received from child:",data);
    },[]);

    function handleHome(){
        navigate("/");
    }

    return(<>
    <p className='h1 text-danger'>{id}</p>
    <Link to="/">Home</Link>
    <button className="btn btn-primary" onClick={handleHome}>Home pag</button>
    <p className="h4 fw-bold text-primary">Count:{count} Name:{name} Age:{age} Result:{result} m2:{m2}</p>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <input type="number" value={age} onChange={(e)=>{setAge(Number(e.target.value))}} />
    <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}>Increment</button>
    <Child count={count} name={name} sendData={receiveData} childF1={f1}/>
    <p className="h3 fw-bold text-primary">Parent component-26</p>
    </>);
    function mul(count){
        console.log("Multiple function ");
        for(let i=1;i<=1000000000;i++){}
        for(let i=0;i<1000000000;i++){}
        let m=1;
        for(let i=1;i<=count;i++){
            m=m*i;
        };
        return m;
    }
};
export default Parent;