import { logDOM } from "@testing-library/react";
import react from "react";
import './CreateTodoButton.css'

function CreateTodoButtom(props){
    return(
        <button 
        className="CreateTodoButton"
        >
        +
        </button>
    );
}

export { CreateTodoButtom};