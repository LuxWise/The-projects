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
            <p>{total} Proyectos en proseso</p>
	        </div>
      </div>
      
      <div class="topicProjects">
        <h3>Estado de los proyectos</h3>
        <p>{processProjets} Proyectos en proseso </p>
        <p>{detainedProjets} Projectos detenidos </p>
        <p>{abandonedProjets} Projectos abandonados </p>
      </div>
    </div>
  );
}
  
export { ProjectCounter };
