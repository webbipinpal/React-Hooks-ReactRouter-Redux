import React, { useContext } from "react";
import classes from './Todos.module.css';
import ToDoListItem from "./ToDoListItem";
import { TodosContext } from "../store/todos-context";


const ToDoList: React.FC = () =>{

const todoCtx  = useContext(TodosContext);
    return(
        <ul className={classes.todos}>
          {todoCtx.items.map( item =>
                <ToDoListItem key={item.id} text={item.text} onRemoveTodo={todoCtx.onRemovetodo.bind(null, item.id)} />
             )}
        </ul>
    );
}

export default ToDoList;