import { useRef,useState } from "react";

const FormComponent=()=>{

const OnSubmit=()=>{
    
    OnValidate();
    OnReset();


};

const [nameError,setNameError]=useState(null);
const [ageError,setAgeError]=useState(null);
const [profError,setProfError]=useState(null);

const OnReset=()=>{
    nameRef.current.value="";
    ageRef.current.value="";
    profRef.current.value="";

}
const nameRef=useRef();
const ageRef=useRef();
const profRef=useRef();
const   validRef=useRef();

const OnValidate=()=>{
    const name=nameRef.current.value;
    const age=ageRef.current.value;
    const prof=profRef.current.value;
    const valid=validRef.current.value;

}


    return(
       
         
         <div style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}>
         <div style={{
            backgroundColor:"white",
            padding:"40px",
            borderRadius:"12px",
            boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",
            width:"100%",
            maxWidth:"450px"
}} className="form-container"> 
                <div style={{textAlign:"center",marginBottom:"20px"}}>
                    <h1 style={{fontSize:"28px",fontWeight:"bold",color:"#333",margin:"0"}}>Welcome</h1>
                    <p style={{fontSize:"14px",color:"#666",margin:"0"}}>Fill in your details to get started </p>
                </div>

                 <div className="form-group">
                    <label htmlFor="fname">Name</label>
                    <input type="text" id="fname" className="form-control" placeholder="Enter name"/>
                 </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" className="form-control" placeholder="Enter age"/>
                 </div>
                  <div className="form-group">
                    <label htmlFor="profession">Profession</label>
                     <select id="profession" className="form-control" >
                        <option value="developer">Developer</option>
                        <option value="tester">Tester</option>
                        <option value="manager">Manager</option>
                     </select>
                 </div>
                 {/* Terms and condition checkbox */}
                 <div className="form-group">
                    <input type="checkbox" id="terms" className="form-check-input" />
                    <label htmlFor="terms" className="form-check-label">I accept terms and conditions</label>
                 </div>
                 <div>

                 </div>
                <div style={{marginTop:"40px",display:"flex",justifyContent:"center",gap:"5px"}} className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={OnSubmit}>Submit</button>
                    <button type="reset" className="btn btn-danger" onClick={OnReset}>Reset</button>

                </div>
         </div>
        </div>
)
};
export default FormComponent;