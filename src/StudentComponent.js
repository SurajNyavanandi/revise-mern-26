const Student =(props)=>{

  //object desecturcting
  const {name,age,friend}=props;
  //extract individual
  const fnmae=props.name;
  
  return (
    <>
      <h4>Student Component</h4>
      <span> Name: {name}</span>
      <span> Age: {age}</span>
      <span> Friend: {friend}</span>          
    </>
    )
};

export default Student;