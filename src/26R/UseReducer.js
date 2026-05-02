import React, { useReducer } from 'react';

function UseReducerComponent() {
  const initialState = {
    name: "",
    age: 0
  };

  // ✅ Reducer function (takes state and action)
  const reducer = (state, action) => {
    switch(action.type) {
      case "SET_NAME":
        return {...state, name: action.payload};
      case "SET_AGE":
        return {...state, age: action.payload};
      default:
        return state;
    }
  };

  // ✅ useReducer takes reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h5>Use Reducer</h5>
      <h2>{state.name}</h2>
      <p>Age: {state.age}</p>
      <input 
        type="text" 
        onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})} 
      />
      <input 
        type="number" 
        onChange={(e) => dispatch({type: "SET_AGE", payload: e.target.value})} 
      />
    </>
  );
}

export default UseReducerComponent;