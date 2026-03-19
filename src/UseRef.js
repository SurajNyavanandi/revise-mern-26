import {useRef} from 'react'

const UseRefHook=()=>{
   let inputref=useRef(null);

   const submit=()=>{
    console.log(inputref.current.value);
    inputref.current.value=""; 
   }
    return (<>
     <h4>Use Ref Hook</h4>
     <input type="text" ref={inputref}/>
     <button onClick={submit}>Submit</button>
     <span>{inputref.current?.value || ''}</span>
    </>)
}
export default UseRefHook;