import { NavbarLeft} from '../NavbarLeft';
import { NavbarRight } from '../NavbarRight';
import { ProjectTitle } from '../ProjectTitle';
import { CreateProjectButton } from '../CreateProjectButton';
import { ProjectList } from '../ProjectList';
import { ProjectCounter } from '../ProjectCounter';
import { ProjectItem } from '../ProjectItem';
import { ProjectLoading } from '../ProjectLoading';
import { ProjectError } from '../ProjectError';
import { EmptyProject } from '../EmptyProject';

import { ProjectContext } from '../ProjectContext';

function AppUI(){
	return(
		<>
      <nav>
        <NavbarLeft/>
        <NavbarRight/>
      </nav>

      <header className='titlesContainer'>
        <ProjectTitle/>
        <CreateProjectButton/> 
      </header>
      
        <section className="projectsContainer">
        <ProjectContext.Consumer>
          {({
            loading,
            error,
            searchedProjects, 
            statusProjects, 
          }) => (
          <ProjectList>
          
            {loading && <ProjectLoading/>}
            {error && <ProjectError/>}
            {(!loading && searchedProjects.length === 0) && <EmptyProject/>}

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
          </ProjectList>
          )}
        </ProjectContext.Consumer>
         
        <ProjectCounter/>

      </section>
    </>
	)
}

export { AppUI };
