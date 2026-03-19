import { useParams } from "react-router-dom";

const ContactComponent=()=>{
    const v1=useParams();
    return (<>
       <h4>Contact Component</h4>
       <h3>Params : {v1.name}</h3>
    </>)
};
export default ContactComponent;