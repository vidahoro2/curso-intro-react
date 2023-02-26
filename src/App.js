const todos = [
  {text:'Cortar Cebolla', completed:false},
  {text:'Tomar el curso de intro a React', completed:false},
  {text:'Cortar cesped', completed:false},
];

function App() {
  return (
    <div>
          <TodoCounter />
      <h2>Has completado 2 de 3 TODOs</h2>
      
      <TodoSearch />
      <input placeholder="Cebolla"/>

      <TodoList>
          {todos.map(todo => (<TodoItem/>) )}
      </TodoList>

      <CreateTodoButtom/>
      <button></button>
    </div>
  
  );
}

export default App;
