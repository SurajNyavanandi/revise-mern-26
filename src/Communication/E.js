import { useContext } from "react";
import { MessageContext } from "./A";

const Ecomponent = () => {
    const receiveMessage = useContext(MessageContext);
    const sendToA = () => {
        receiveMessage("Hello A! Message from E!");
    }
    return (
        <>
            <h4>E Component</h4>
            <button onClick={sendToA}>Send Message to A</button>
        </>
    )
};
export default Ecomponent;