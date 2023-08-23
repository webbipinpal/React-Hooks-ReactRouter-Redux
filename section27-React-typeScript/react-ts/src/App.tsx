
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';
import TodosContextProvider from './store/todos-context';

function App() {
  
  return (
    <TodosContextProvider>
      <NewToDo />
      <ToDoList />
    </TodosContextProvider>
  );
}

export default App;
