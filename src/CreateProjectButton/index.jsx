import react from 'react';
import './CreateProjectButton.css';
import { ProjectContext } from '../ProjectContext';

function CreateProjectButton() {
  const { setOpenModal } = react.useContext(ProjectContext);

  return(
    <div className="newProject">
      <button className="CreateNewProject" 
        onClick={ () => {setOpenModal(true)} }>
        Nuevo Proyecto
      </button>
	  </div> 
  );
}

export { CreateProjectButton };
