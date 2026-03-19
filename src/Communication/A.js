import { createContext } from "react";

// Create the Context (phone line)
const MessageContext = createContext();
export { MessageContext };

const receiveMessage=(message)=>{
    console.log("A received Data from E ",message);
}

const Acomponent = () => {
    return (
        <>
            <h4>A Component</h4>

            <MessageContext.Provider value={receiveMessage}>
                <Ecomponent></Ecomponent>
            </MessageContext.Provider>
        </>
    )
};

export default Acomponent;