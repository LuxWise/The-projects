import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return(
    <h1> 
      Se completarion {total} de {completed} TODOS
    </h1>
  );
}
  
export { TodoCounter };
