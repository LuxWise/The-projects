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
import { NewProject } from '../NewProject';
import { ProjectContext } from '../ProjectContext';
import { Modal } from '../Modal';

import React from 'react';

function AppUI(){

  const {
    loading,
    error,
    searchedProjects, 
    statusProjects, 
    openModal,
  } = React.useContext(ProjectContext)

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
         
        <ProjectCounter/>

      </section>

      {openModal && (
        <Modal>
          <NewProject/>
        </Modal>
      )}

    </>
	)
}

export { AppUI };
