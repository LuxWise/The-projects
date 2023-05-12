import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter.js';

function App() {
  return (
    <div className="App">
      
      <TodoCounter />
      <TodoSearch />

      <TodoList>

        <TodoItem />
        <TodoItem />
        <TodoItem />

      </TodoList>

      <CreateTodoButton />

   </div>
  ); 
}

function TodoItem() {
  return(
    <li>
      <span>V</span>
      <p>Comer mucho</p>
      <span>X</span>
    </li>
  );
}

export default App;
