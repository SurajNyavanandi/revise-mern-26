import { useState } from "react";
import ChildComponent from "./Child";
const ParentComponent=()=>{
    const [showChild,setShowChild]=useState(true);
    const toggleChild=()=>{
        setShowChild(!showChild);
        console.log("Toggling the child....");
    }
    return (<>
        <h4>Parent Component</h4>
         <h2>Toggle child component</h2>
         <button onClick={toggleChild}>Toggle Child Component</button>
         {showChild?<ChildComponent></ChildComponent>:null}
    </>)
};
export default ParentComponent;