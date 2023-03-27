import React from "react";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButtom } from "../CreateTodoButton/index.js";
import {TodoBanner} from "../TodoBanner"

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,

}){
    return(
        <React.Fragment>
        <div className="Main-Container">
          <div className="TodoContainer">
            <TodoCounter
              total={totalTodos}
              completed = {completedTodos}
            />
      
                <TodoSearch
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <TodoList>
                  {searchedTodos.map(todo =>(
                    <TodoItem
                     key={todo.text}
                     text={todo.text}
                     completed={todo.completed}
                     onComplete = {()=> completeTodo(todo.text)}
                     onDelete = {()=> deleteTodo(todo.text)}
                     />))}
                </TodoList>
                <CreateTodoButtom />
      
          </div>
      
          <TodoBanner/>
      
      
        </div>
        
        </React.Fragment>
    );
}

export {AppUI};