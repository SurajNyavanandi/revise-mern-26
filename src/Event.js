
const EventComponent=()=>{
  
    function a1(){
           alert("A1 alert");
    }
    const inputChange=(event)=>alert(event.target.value);
    let count=0;

    const increment=()=>{
        count+=1;
        console.log(count);
        
    }

    return (
        <>
          <button onClick={a1}>Alert 1</button>
          <button onClick={ ()=>alert("Alert 2")}>Alert 2</button>
          <input type="text" onChange={inputChange} />
          <button onClick={increment}>Increment</button>
          <h4>Problem Counter not getting incremented</h4>
          <h4>{count}</h4>
        </>
    )
}

export default EventComponent;