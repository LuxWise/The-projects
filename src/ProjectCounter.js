import './ProjectCounter.css';

function ProjectCounter({ 
  total, 
  processProjets, 
  detainedProjets,
  abandonedProjets
}) {
  return(
    <div class="projectsDescription">
      <div class="totalProjects">	
	      <h3>Total proyectos</h3>
	        <div>
            <p>{total} Proyectos en proceso</p>
	        </div>
      </div>
      
      <div class="topicProjects">
        <h3>Estado de los proyectos</h3>
        <p>{processProjets} Proyectos en proceso </p>
        <p>{detainedProjets} Proyectos detenidos </p>
        <p>{abandonedProjets} Proyectos abandonados </p>
      </div>
    </div>
  );
}
  
export { ProjectCounter };
