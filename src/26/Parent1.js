import { MessageContext } from "./MessageContext";
import Child1 from "./Child1";
function Parent1(){
    return <>
        <MessageContext.Provider value="Hello from Parent">
            <Child1></Child1>
        </MessageContext.Provider>            
    </>
};
export default Parent1;