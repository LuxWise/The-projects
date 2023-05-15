import './ProjectCounter.css';

function ProjectCounter({ total }) {
  return(
    <div class="projectsDescription">
      <div class="totalProjects">	
	      <h3>Total proyectos</h3>
	        <div>
            <p>{total} Proyectos en proseso</p>
	        </div>
      </div>
      
      <div class="topicProjects">
        <h3>Tematicas utilizadas</h3>
      </div>
    </div>
  );
}
  
export { ProjectCounter };
