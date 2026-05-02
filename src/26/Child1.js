import { useContext } from "react";
import { MessageContext } from "./MessageContext";

function Child1(){
    const message=useContext(MessageContext);
    return <>
           <h1>Hello</h1>
           <h2>{message}</h2>
           <h1>Hello2</h1>
    </>
};
export default Child1;