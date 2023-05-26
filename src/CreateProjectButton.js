import './CreateProjectButton.css';

function CreateProjectButton() {
  return(
    <div className="newProject">
      <button className="CreateNewProject" 
        onClick={ 
        (event) => {
          console.log('click')
          console.log(event)
          console.log(event.target)
          }
        } >
        Nuevo Proyecto
      </button>
	  </div> 
  );
}

export { CreateProjectButton };
