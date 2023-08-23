import React, {useState, useCallback, useMemo} from 'react';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';
import './App.css';

function App() {

  const [listTitle, setlistTitle] = useState('My List');

  const changeListTitleHandler = useCallback(() => {
      setlistTitle('My List New Title');
  });
  
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeListTitleHandler}>Change List Title </Button>
    </div>
  );
}

export default App;
