import { useContext } from "react";
import { MessageContext } from "./MessageContext";  // ✅ Import from here

const F2component = () => {
    const receivedMessage = useContext(MessageContext);

    const f2Data = {
        name: "Jai Shree Rama",
        age: 26,
        friend: "Om Namah Shivaya"
    };

    const sendMesssage = () => {
        receivedMessage(f2Data);
    }

    return (
        <>
            <h4>F2 Component</h4>
            <button onClick={sendMesssage}>Send Data to F1</button>
        </>
    )
};

export default F2component;
