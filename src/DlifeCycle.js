import React from 'react';
class LifeCycleComponent extends React.Component{
    
    constructor(){
        super();
        this.num = 0;
        this.state = { count: 0 };
        console.log("Constructor - count: ", this.state.count);
    }

    componentDidMount(){
        // First setState - makes it 1
        this.setState({ count: this.state.count + 1 }, () => {
            console.log("DidMount - After 1st setState: ", this.state.count);
            
            // Second setState - makes it 2
            this.setState({ count: this.state.count + 1 }, () => {
                console.log("DidMount - After 2nd setState: ", this.state.count);
            });
        });
    }

    render(){
        console.log("Render - count: ", this.state.count);
        
        return (
            <>
                <h4>Life Cycle</h4>
                <p>Count: {this.state.count}</p>
            </>
        )
    }
}

export default LifeCycleComponent;