import { useState } from "react";
import ChildComponent from './Child';
const ParentComponent= ()=>{


    const receiveMessage=(message)=>{
        console.log("Data from Child ",message);
        
    }

    const [ inputText,setInputText]=useState('');

    return (<>
           <h4>Parent-Component</h4>
           <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
           <h3>{inputText}</h3>
           <ChildComponent inputText={inputText} sendMessage={receiveMessage}></ChildComponent>
    </>)
};
export default ParentComponent;