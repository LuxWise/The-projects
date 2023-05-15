import React from 'react';

import { NavbarLeft } from './NavbarLeft.js';
import { NavbarRight } from './NavbarRight.js';
import { ProjectIndex } from './ProjectIndex.js';
import { ProjectSearch } from './ProjectSearch.js';
import { ProjectUser } from './ProjectUser.js';
import { ProjectTitle } from './ProjectTitle';

import { ProjectList } from './ProjectList.js';
import { ProjectItem } from './ProjectItem.js';
import { CreateProjectButton } from './CreateProjectButton.js';


const defaultTodos = [
  { title: 'Project Water', color: '#E1D46C', date: '10-enero-2020'  },
  { title: 'Project masters of data', color: '#F1F5D4', date: '26-marzo-2021' },
  { title: 'Project security', color: '#D1EAF1', date: '13-octubre-2022' },
  { title: 'Project projects', color: '#E3D3F4', date: '20-febrero-2023' },
];


function App() {

  // <> = <React.Fragment>
  
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
    </>
  );
}

export default App;
