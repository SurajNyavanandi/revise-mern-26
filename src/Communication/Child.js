
const ChildComponent=(props)=>{

    const sendMessage=()=>{
        props.sendMessage("Message from Child to Parent");
    }

    return (<>
        <h4>Child-Component</h4>
        <button onClick={sendMessage}>Send Data to Parent</button>
        <h3>{props.inputText}</h3>
      
    </>)
}
export default ChildComponent;