import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super()
        this.state = {
            hasErrow: false,
        }
    }

    componentDidCatch(error){
        console.log("error");
        this.setState({
            hasErrow:true
        });
    }
    
    render(){
        if(this.state.hasErrow){
            return <p>Somthing is wrong</p>;
        }
        return this.props.children;
    }
};

export default ErrorBoundary;