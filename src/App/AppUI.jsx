import { NavbarLeft} from '../NavbarLeft';
import { NavbarRight } from '../NavbarRight';
import { ProjectTitle } from '../ProjectTitle';
import { CreateProjectButton } from '../CreateProjectButton';
import { ProjectList } from '../ProjectList';
import { ProjectCounter } from '../ProjectCounter';
import { ProjectItem } from '../ProjectItem';

function AppUI({
  searchValue, setSearchValue, searchedProjects, statusProjects, totalProjects, detainedProjets, abandonedProjets, processProjets
}){
	return(
		<>
      <nav>
        <NavbarLeft
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        <NavbarRight
          name = 'jcsanchez55'
        />
      </nav>
      <section className='titlesContainer'>
        <ProjectTitle/>
        <CreateProjectButton/> 
      </section>
      <section className="projectsContainer">
        <ProjectList>
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
        <ProjectCounter 
          total = {totalProjects} 
          processProjets = {processProjets}
          detainedProjets = {detainedProjets}
          abandonedProjets = {abandonedProjets}
        />

      </section>
    </>
	)
}

export { AppUI };
