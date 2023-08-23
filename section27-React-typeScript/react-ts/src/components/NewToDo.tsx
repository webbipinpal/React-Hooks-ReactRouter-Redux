import { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewToDo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const entervalue = todoTextInputRef.current!.value;

        if( entervalue?.trim().length === 0 ){
            //Error 
            return;
        }

        todosCtx.addTodo(entervalue);

    }

    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <label htmlFor="">Todo Text</label>
        <input type="text" id="label" ref={todoTextInputRef} />
        <button> Add Todo </button>
    </form>
}

export default NewToDo;