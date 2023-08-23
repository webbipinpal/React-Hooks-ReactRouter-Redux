import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {

  const [showText, setShowText] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("Button Toggle");

  const toggleTextHandler = useCallback(() => {
    if(allowToggle){
      setShowText((showText) => !showText);
    }
    
  }, [allowToggle]) ;

  const AllowToggleHandler = () =>{
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showText} />
      <Button onClick={AllowToggleHandler}> Allow Toggle Text </Button> <br /> <br />
      <Button onClick={toggleTextHandler}>Toggle Text </Button>
    </div>
  );
}

export default App;
