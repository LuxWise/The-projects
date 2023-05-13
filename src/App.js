import React from 'react';

import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';

const defaultTodos = [
  { text: 'Estudiar fullstack', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: true },
  { text: 'Conseguir trabajo', completed: false },
  { text: 'Jugar Zelda BOW', completed: false },
];


function App() {

  // <> = <React.Fragment>
  
  return (
    <>  
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
