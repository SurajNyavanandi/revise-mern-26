import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const HomeComponent=()=>{
    const navigate=useNavigate();
    return(<>
            <h4>Welcome to my application</h4>
            <div>
              <Link to="/contact"><h2>Contact Page</h2></Link>
              <Link to="/login"> <h2>Login Page</h2></Link>
              <Link to="/register"> <h2>Register Page</h2></Link> 
              <button onClick={()=>navigate("/login")}>Login Using Navigation</button>        
            </div>
      
    </>)
};
export default HomeComponent;