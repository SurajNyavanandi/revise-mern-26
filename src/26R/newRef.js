import React, { useRef, useEffect ,useState} from 'react';
function NewRef(){
    const [name,setName]=useState('');
    const count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
    })

    return (<>
    <h5>New Ref Component</h5>
    <input type="text" onChange={(e)=>setName(e.target.value)} />
    <h5>Count: {count.current}</h5>
    <h5>Name: {name}</h5>
    </>)
};
export default NewRef;