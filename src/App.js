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

const defaultProjects = [
  { title: 'Project Water', color: '#E1D46C', date: '10-enero-2020'  },
  { title: 'Project masters of data', color: '#C4D4D4', date: '26-marzo-2021' },
  { title: 'Project security', color: '#CFD3C1', date: '13-octubre-2022' },
  { title: 'Project projects', color: '#3D3F4D', date: '20-febrero-2023' },
];


function App() {

  // <> = <React.Fragment>

  const total = defaultProjects.length;

  return (
    <>
      <nav>
        <NavbarLeft>
          <ProjectIndex/>
          <ProjectSearch/>
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
          {defaultProjects.map(project => (
            <ProjectItem 
              key={project.title}
              color={project.color}
              title={project.title}
              date={project.date}
            />
          ))}
        </ProjectList>

        <ProjectCounter total={total} />

      </section>
    </>
  );
}

export default App;
