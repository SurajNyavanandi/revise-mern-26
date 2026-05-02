 import React, {useRef,useState} from 'react';

const Login=()=>{
   
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    return(<>
    <h3>Login Component</h3>
    <input type="text" placeholder='enter email' ref={email} value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>

    <input type="password" placeholder='enter password' ref={password} value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
    <button className="btn btn-primary" onClick={()=>{console.log("Email:",email,"Password:",password)}}>Login</button>
    </>)
};
export default Login;