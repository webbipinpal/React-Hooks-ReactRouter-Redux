import React, { Component } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modelIsOpen:false,
  }

  showModel = () => {
    this.setState({
      modelIsOpen:true,
    })
  }

  closeModel = () => {
    this.setState({
      modelIsOpen:false,
      showBlock:false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(preState => ({showBlock : !preState.showBlock}))}> Toggle </button> 
      <Transition 
        in={this.state.showBlock} 
        timeout={300}
        mountOnEnter
        unmountOnExit
        onEnter={ () => console.log('onEnter')}
        onEntering={ () => console.log('onEntering')}
        onEntered={ () => console.log('onEntered')}
        onExit={ () => console.log('onExit')}
        onExiting={ () => console.log('onExiting')}
        onExited={ () => console.log('onExited')}
        >
        { state => (
           <div style={{
            backgroundColor:'#ccc',
            width:'100px',
            height:'100px',
            border:'1px solid #5555',
            margin:'0 auto',
            transition:'opacity 1s ease-out',
            opacity: state === 'exiting' ? 0 : 1
          }}></div>
        )}
       
      </Transition>
         <br />
         
          <Modal show={this.state.modelIsOpen} closed={this.closeModel}  />
          
         
        {this.state.modelIsOpen ? <Backdrop show /> : null} 
        <button className="Button" onClick={this.showModel}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
