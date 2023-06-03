import React from "react";
import { useLocalStorage } from './useLocalStorage';

const ProjectContext = React.createContext();

function ProjectProvider({children}){
	
  const {
    Item:projects,
    saveItem:saveProjects,
    loading,
    error  
  } = useLocalStorage('PROJECTS_V1', []);
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
  const name = 'jcsanchez55';

	return(
    <ProjectContext.Provider value={{
      name,
      loading,
      error,
      searchValue, 
      setSearchValue, 
      searchedProjects, 
      statusProjects, 
      totalProjects, 
      detainedProjets, 
      abandonedProjets, 
      processProjets
    }}>
      {children}
    </ProjectContext.Provider>
	)

}

export { ProjectContext, ProjectProvider }

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
