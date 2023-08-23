import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items:Todo[],
    addTodo : (text:string) => void,
    onRemovetodo : (id:string) => void,
}

export const TodosContext = createContext<TodosContextObj>({
    items:[],
    addTodo : () => {},
    onRemovetodo : (id:string) => {}
});

const TodosContextProvider:React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);
  const onAddTodoHandler = (todoText:string) => {
    const newTodo = new Todo(todoText);
    setTodos( (prevTodos) =>{
      return prevTodos.concat(newTodo);
    } );
  } 

  const onRemoveTodoHandler = (todoId:string) => {

    setTodos( (prevTodos) => {
      return prevTodos.filter( todo => todo.id !==  todoId)
    } );
  };
  
const contextValue :TodosContextObj = {
    items:todos ,
    addTodo: onAddTodoHandler,
    onRemovetodo: onRemoveTodoHandler
}
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;