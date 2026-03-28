import {useEffect} from 'react';
const ChildComponent=()=>{
    let count=0;

    
    useEffect(()=>{
        console.log("Use effect is performing....");
        
  const interval=setInterval(()=>{
        count+=1;
        console.log("Child Component count",count);
    },1000);
    return ()=>clearInterval(interval);//only runs when component ummonubts/destroryed 
    },[])
    return (<>
        <h4>Child Component</h4>
    </>)
};
export default ChildComponent;