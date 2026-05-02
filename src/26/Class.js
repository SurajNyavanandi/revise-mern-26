import React from 'react';
class ClassLifeCycle extends React.Component{
 constructor(props){
    super(props);
    this.state={
        count:0
    };
 };
 componentDidMount(){
    console.log("Component appeared on screen");
    
 };
 componentDidUpdate(){
    console.log("Component updated");
    
 };
 componentWillUnmount(){
    console.log("Component removed from screen");
    
 };

    render(){
        return(
        <>
           <h4>Class Life Cycle </h4>
        <p>Count :{this.state.count}</p>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me </button>
        </>
        )
    }
};
export default ClassLifeCycle;
