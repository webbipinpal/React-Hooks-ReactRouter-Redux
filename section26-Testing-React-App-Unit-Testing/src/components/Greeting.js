import React, {useState} from "react";
import Output from "./Output";
const Greeting = () =>{
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    }

    return(
        <div style={{ maxWidth:'960px', margin: '0 auto' }}>
            <h1>Hello Word!</h1>
            {!changedText && <Output>It's good to to see your!.</Output> }
            {changedText && <Output>Clicked!</Output> }
            <button onClick={changedTextHandler}> Clicked </button>
        </div>
    );
}

export default Greeting;