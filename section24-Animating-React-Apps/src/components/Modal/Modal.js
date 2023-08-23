import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const modal = (props) => {

    const animationsTimeing = {
        enter:400,
        exit:1000
    }
    
    return(
        <CSSTransition 
         mountOnEnter
         unmountOnExit
         in={props.show} 
         timeout={animationsTimeing}
         classNames={{
             enter: '',
             enterActive: 'ModalOpen',
             exit: '',
             exitActive :'ModalClosed'
         }}
         >
            <div className='Modal'>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
       
        </CSSTransition>
    );
    
};

export default modal;