import { useState,useMemo} from "react";

const UseMemoComponent=()=>{
    const [count,setCount]=useState(0);

    const sorted=useMemo(()=>{
        console.log("Use memo running");
        
        return [2,6,8,1].sort();
    },[count]);
    return(<>
     <h4>Use Memo Component</h4>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <span>{count}</span>
    </>)
};
export default UseMemoComponent;