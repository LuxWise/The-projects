import React from 'react';

import { useLocalStorage } from './useLocalStorage';

import { NavbarLeft} from '../NavbarLeft';
import { NavbarRight } from '../NavbarRight';
import { ProjectTitle } from '../ProjectTitle';
import { CreateProjectButton } from '../CreateProjectButton';
import { ProjectList } from '../ProjectList';
import { ProjectCounter } from '../ProjectCounter';

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
  

  // <> = <React.Fragment>

  const [projects, saveProjects] = useLocalStorage('PROJECTS_V1', []);
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
    saveProjects(statusArray);
  }

  return (
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
  );
}

export default App;
