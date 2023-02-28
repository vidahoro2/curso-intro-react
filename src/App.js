import react from "react";
import {TodoCounter} from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButton.js";
import {TodoBanner} from "./TodoBanner"

import './App.css';
const todos=[
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];
function App() {
  return (
  <react.Fragment>
  <div className="Main-Container">
    <div className="TodoContainer">
      <TodoCounter/>

          <TodoSearch />
          <TodoList>
            {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
          </TodoList>
          <CreateTodoButtom />

    </div>

    <TodoBanner/>


  </div>
  
  </react.Fragment>
  );
}

export default App;
