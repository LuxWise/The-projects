import './CreateProjectButton.css';

function CreateProjectButton() {
  return(
    <div class="newProject">
      <button class="CreateNewProject" 
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
