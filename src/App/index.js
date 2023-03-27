import React from "react";
import { AppUI } from "./AppUI";


function useLocalStorage(itemName,initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = [];
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item,setItem] = React.useState(parsedItem);

  const saveItem = (newItem) =>{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName,stringifiedItem);
    setItem(newItem);

  };

  return [
    item,
    saveItem
  ];
}


function App() {

  const [item,saveTodos] = useLocalStorage('TODOS_V1',[]);

  
  const [searchValue,setSearchValue] = React.useState('');

  const completedTodos = item.filter(todo=> !!todo.completed).length;
  const totalTodos = item.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = item;
  }
  else{
    searchedTodos = item.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })

  }


  

  const completeTodo = (text) => {
    const todoIndex = item.findIndex(todo => todo.text === text);
    const newTodos = [...item];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);

  }

  
  const deleteTodo = (text) => {
    const todoIndex = item.findIndex(todo => todo.text === text);
    const newTodos = [...item];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  }

  
  return (
    <AppUI
        totalTodos={totalTodos}
        completedTodos = {completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}




    />

  );
}

export default App;
