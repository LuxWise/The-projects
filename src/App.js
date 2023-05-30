import React from 'react';

import { NavbarLeft, ProjectIndex, ProjectSearch } from './NavbarLeft';
import { NavbarRight, ProjectUser } from './NavbarRight';
import { ProjectTitle } from './ProjectTitle';
import { CreateProjectButton } from './CreateProjectButton';
import { ProjectList, ProjectItem } from './ProjectList';
import { ProjectCounter } from './ProjectCounter';

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

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parcedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parcedItem = initialValue;
  }else {
    parcedItem = JSON.parse(localStorageItem);
  }
  
  const [Item, setItem] =  React.useState(parcedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [Item, saveItem] ;
}


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
  );
}

export default App;
