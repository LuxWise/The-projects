import './ProjectCounter.css';

function ProjectCounter({ total, completed }) {
  return(
    <h1> 
      Se completarion {total} de {completed} TODOS
    </h1>
  );
}
  
export { ProjectCounter };
