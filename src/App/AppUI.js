import { NavbarLeft} from '../NavbarLeft';
import { NavbarRight } from '../NavbarRight';
import { ProjectTitle } from '../ProjectTitle';
import { CreateProjectButton } from '../CreateProjectButton';
import { ProjectList } from '../ProjectList';
import { ProjectCounter } from '../ProjectCounter';

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
        <ProjectList
          searchedProjects = {searchedProjects}
          statusProjects = {statusProjects}
        />
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
