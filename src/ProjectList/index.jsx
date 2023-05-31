import './ProjectList.css';
import { ProjectItem } from './ProjectItem';

function ProjectList({ searchedProjects,statusProjects }) {
  return(
    <div className="theProjets">
      {searchedProjects.map(project => (
            <ProjectItem 
              key = {project.title}
              color = {project.color}
              title = {project.title}
              date = {project.date}
              status = {project.status}
              onStatus = {() => statusProjects(project.title)}
            />
          ))}
    </div>
  );
}

export { ProjectList };
