import React from "react";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButtom } from "../CreateTodoButton/index.js";
import {TodoBanner} from "../TodoBanner"
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";


function AppUI(){


    const {
      error, 
      loading,
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal
      }= React.useContext(TodoContext);
    return(
        <React.Fragment>
        <div className="Main-Container">
          <div className="TodoContainer">
              <TodoCounter/>
      
                <TodoSearch/>
                
                      <TodoList>
                        {error &&  <TodosError error={error}/>}
                        {loading && <TodosLoading/>}
                        {(!loading && !searchedTodos.lengt) && <EmptyTodos/>}

                        {searchedTodos.map(todo =>(
                          <TodoItem 
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={()=>completeTodo(todo.text)}
                            onDelete={()=>deleteTodo(todo.text)}
                          />

                        ))}

                      </TodoList>

                          {openModal && (
                            <Modal>
                              <TodoForm/>
                            </Modal>
                          )

                          }

                <CreateTodoButtom 
                    setOpenModal ={setOpenModal}


                />
      
          </div>
      
          <TodoBanner/>
      
      
        </div>
        
        </React.Fragment>
    );
}

export {AppUI};