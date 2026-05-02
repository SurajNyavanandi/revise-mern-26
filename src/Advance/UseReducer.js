import { useReducer } from "react";

const UseReducerComponent = () => {
    // FIRST: Define reducer function
    const reducer = (state, action) => {
        switch(action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                return state;
        }
    };

    // SECOND: Define initial state
    const initialState = { count: 0 };

    // THIRD: Use useReducer (now reducer exists!)
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h4>Use Reducer</h4>
            <button onClick={()=>dispatch({ type:"increment"})}>Increment</button>
            <p>Count: {state.count}</p>
        </>
    );
};

export default UseReducerComponent;