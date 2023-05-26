import './ProjectCounter.css';

function ProjectCounter({ 
  total, 
  processProjets, 
  detainedProjets,
  abandonedProjets
}) {
  return(
    <div className="projectsDescription">
      <div className="totalProjects">	
	      <h3>Total proyectos</h3>
	        <div>
            <p>{total} Proyectos en proceso</p>
	        </div>
      </div>
      
      <div className="topicProjects">
        <h3>Estado de los proyectos</h3>
        <p>{processProjets} Proyectos en proceso </p>
        <p>{detainedProjets} Proyectos detenidos </p>
        <p>{abandonedProjets} Proyectos abandonados </p>
      </div>
    </div>
  );
}
  
export { ProjectCounter };
