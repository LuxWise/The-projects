import React from 'react';

import { NavbarLeft } from './NavbarLeft.js';
import { NavbarRight } from './NavbarRight.js';
import { ProjectIndex } from './ProjectIndex.js';
import { ProjectSearch } from './ProjectSearch.js';
import { ProjectUser } from './ProjectUser.js';
import { ProjectTitle } from './ProjectTitle';
import { CreateProjectButton } from './CreateProjectButton.js';

import { ProjectList } from './ProjectList.js';
import { ProjectItem } from './ProjectItem.js';
import { ProjectCounter } from './ProjectCounter.js';

/*
const defaultProjects = [
  { title: 'Project Water', color: '#E1D46C', date: '10-enero-2020', status: 'x'  },
  { title: 'Project masters of data', color: '#C4D4D4', date: '26-marzo-2021', status: 'v' },
  { title: 'Project security', color: '#CFD3C1', date: '13-octubre-2022', status: '~' },
  { title: 'Project projects', color: '#3D3F4D', date: '20-febrero-2023', status: '~' },
];


const projectStringified = JSON.stringify(defaultProjects);

localStorage.setItem('PROJECTS_V1', projectStringified)

*/

function App() {

  const localStorageTodos = localStorage.getItem('PROJECTS_V1');

  let parcedProjects = JSON.parse(localStorageTodos);

  // <> = <React.Fragment>

  const [projects, setProjects] = React.useState(parcedProjects);
  const [searchValue, setSearchValue] = React.useState('');
  
  const totalProjects = projects.length;

  const searchedProjects = projects.filter((project) => {
    const projectTitle = project.title.toLocaleLowerCase();
    const searchTittle = searchValue.toLocaleLowerCase();

    return projectTitle.includes(searchTittle);
  });  

  
  const processProjets = projects.filter(
    project => project.status === 'v' ).length;
  const detainedProjets = projects.filter(
    project => project.status === '~' ).length;
  const abandonedProjets = projects.filter(
    project => project.status === 'x' ).length;
  

  const statusProjects = (title) => {

    const statusArray = [...projects];
    const statusIndex = statusArray.findIndex(
      status => status.title === title
    );

    const setStatus = {
      'v': '~',
      '~': 'x',
      'x': 'v'
    };

    statusArray[statusIndex].status = setStatus[statusArray[statusIndex].status]
    setProjects(statusArray);
  }

  return (
    <>
      <nav>
        <NavbarLeft>
          <ProjectIndex/>
          <ProjectSearch
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
        </ NavbarLeft>
        <NavbarRight>
          <ProjectUser name='jcsanchez55' />
        </NavbarRight>
      </nav>
      <section className='titlesContainer'>
        <ProjectTitle/>
        <CreateProjectButton/> 
      </section>
      <section class="projectsContainer">
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
  );
}

export default App;
