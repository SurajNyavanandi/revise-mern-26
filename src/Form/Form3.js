import {useState} from 'react';
import axios from 'axios';
const FormComponent3=()=>{
 
    const [formdata,setFormData]=useState({
        name:"",
        age:0,
        friend:""
    });
    const [errors,setErrors]=useState({});
    const [loading,setLoading]=useState(false);
    const [message,setMessage]=useState("");
    const [submittedData,setSubmittedData]=useState([]);

    const onSubmit=()=>{
        let newErrors={};
          console.log("Submit button clicked ");
          console.log("Form Data",formdata);
          
          if(formdata.name===""){newErrors.name="Name is required"};
          if(formdata.name.length<3){newErrors.name="Name should have at least 3 characters"} ;
          if(formdata.age<18){newErrors.age="Age should be greater than 18"};
          if(formdata.friend===""){newErrors.friend="Friend is required"}


          setErrors(newErrors);
         // Object.keys(newErrors).length===0 && console.log("Form submitted");
          if(Object.keys(newErrors).length===0){
            setLoading(true);
            axios.post("https://jsonplaceholder.typicode.com/posts",formdata)
                 .then((res)=>{
                    setLoading(false);
                    setMessage("Form submitted successfully");
                    setSubmittedData([...submittedData,res.data]);
                    console.log("Response from backend",res.data);
                    
                 })
                 .catch((err)=>{
                    setLoading(false);
                    setMessage("Form submission failed");
                    console.log("Error ", err);
                    
                 })
          }
    }
    const onReset=()=>{
        setFormData({
            name:'',
            age:0,
            friend:''
        })
        setErrors({});
    }
    //const onValidate=()=>{}
   const handleChange=(e)=>{
    // console.log("Target name ",e.target.id);
    // console.log("Target value ",e.target.value);
       setFormData({
        ...formdata,
        [e.target.id]:e.target.value
       })
   }
    return (<>
           <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
            <div style={{ backgroundColor:'lightblue', padding:"40px", borderRadius:"12px", width:"100%", maxWidth:"450px", boxShadow:"0 0 10px 0 rgba(0,0,0,0.5)"}}> 
                <h4>Form Component</h4>
                <div className='form-group'>
                    <label htmlFor='name'>Name :</label>
                    <input type="text" className='form-control' id='name' onChange={handleChange} value={formdata.name} placeholder='Enter name'/>
                    {errors.name && <span style={{color:"red"}}>{errors.name}</span>}
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Age :</label>
                    <input type="number" className='form-control' id='age' onChange={handleChange} value={formdata.age} />
                    {errors.age && <span style={{color:'red'}}>{errors.age}</span>}
                </div>
                <div className='form-group'>
                    <label htmlFor='friend'>Friend</label>
                    <input type="text" className="form-control" id='friend' onChange={handleChange} value={formdata.friend} />
                   {errors.friend && <span style={{color:'red'}}>{errors.friend}</span>}
                </div>
            
                <div className='form-group'>
                    <button className='btn btn-primary' onClick={onSubmit}>Submit</button>
                    <button className='btn btn-danger' onClick={onReset}>Reset</button>
                    {loading}
                    {message}
                </div>
                <div>
                    <p>Submitted Data : {JSON.stringify(submittedData)}</p>
                </div>
           
            </div>
           </div>
    </>)
};
export default FormComponent3;