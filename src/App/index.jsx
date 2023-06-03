import React from 'react';
import { ProjectProvider } from '../ProjectContext';
import { AppUI } from './AppUI';

function App() {
  
    return (
    <ProjectProvider>
      <AppUI/>  
    </ProjectProvider>
    )
}

export default App;
