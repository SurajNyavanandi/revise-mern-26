import { MessageContext } from "./MessageContext";  // ✅ Import from here
import F2component from "./F2";

const F1component = () => {
    const receivedMessage = (data) => {
        console.log("Data from F2 ", data);
    }

    return (
        <>
            <h4>F1 Component</h4>
            <MessageContext.Provider value={receivedMessage}>
                <F2component />
            </MessageContext.Provider>
        </>
    )
};

export default F1component;