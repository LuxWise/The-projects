import React from 'react';
import './NewProject.css';
import { ProjectContext } from '../ProjectContext';

function NewProject(){

	const {
		addProject,
		setOpenModal,	
	} = React.useContext(ProjectContext)


	const [newProjectTitle, SetNewProjectTitle] = React.useState('')
	const [newProjectColor, SetNewProjectColor] = React.useState('#000000')

	const onSubmit = (event) => {
		event.preventDefault();
		addProject(newProjectTitle, newProjectColor);
		setOpenModal(false);
	};
	
	const onCancel = () => {
		setOpenModal(false);
	};

	const onTitle = (event) => {
		SetNewProjectTitle(event.target.value)
	};	
	const onColor = (event) => {
		SetNewProjectColor(event.target.value)
	};


	return (
		<div className='NewProjectContainer'>
			<h2 className='NewProjectTitle'>Nuevo proyecto</h2>
			<form onSubmit={onSubmit}>
				<div className='NewProjectLeft'>
					<div>
						<label>Title</label>
						<textarea onChange={onTitle} />
					</div>
					<div id='dateColor'>
						<div className='color'>
							<label>Color</label>
							<input type="color" onChange={onColor}/>
						</div>
					</div>
				</div>
				<div className='NewProjectRight'>
					<button className='NewProjectButtom'>crear</button>
					<button 
						className='closeNewProject'
						onClick={onCancel}
					>Cancelar
					</button>
				</div>
				
			</form>
		</div>
		
	)
}

export { NewProject }
