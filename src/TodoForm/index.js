import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const [newTodoValue, setNewTodoValue]= React.useState('');
    const {
        addTodo,
        setOpenModal,
    } =  React.useContext(TodoContext);
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onChange = (event) =>{
        setNewTodoValue(event.target.value) 
    }
    
    const onSubmit = (event) =>{
        event.preventDefault(); 
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return(

        <form onSubmit={onSubmit}>

            <label></label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Hola como vas, saludame"
            />

            <div>
                <button 
                    type="button"
                    onClick={onCancel}>
                    Calcelar
                </button>
                <button 
                    type="submit">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}