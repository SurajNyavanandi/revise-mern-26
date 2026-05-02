import {useReducer} from "react";
const ReduxComponent=()=>{

    const initialState={count:0};
 
    const reducer=(state,action)=>{
        switch(action.type){
            case "increment":
                return {count:state.count+1};
            case "decrement":
                return {count:state.count-1};
            case "reset":
                return {count:0};
            default:
                return state;
        }
    };
    const [state,dispatch]=useReducer(reducer,initialState);
    return(<>
    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"reset"})}>Reset</button> 
    <h4>Count: {state.count}</h4> 
    </>)
} ;
export default ReduxComponent;  