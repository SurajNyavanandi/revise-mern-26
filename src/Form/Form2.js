const Form2Component=()=>{

    const onSubmit=()=>{
    //validate before submitting
    }
    const onReset=()=>{

    }
    const onValidate=()=>{

    }
    return (<>
        
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
            <form>
                <div className="form-group" >
                 <label htmlFor="name">Name :</label>
                 <input type="text" id="name" className="form-control"/>
                </div>
                <div  className="form-group">
                    <label htmlFor="age">Age :</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit" onClick={onSubmit}>Submit</button>
                    <button className="btn btn-danger" type="button" onClick={onReset}>Reset</button>
                </div>
                  
            </form>
        </div>

    </>)
};
export default Form2Component;