import React from 'react';
import './ProjectSearch.css';
import searchIcon from '../assets/icons/searchIcon.png';
import { ProjectContext } from '../ProjectContext';

function ProjectSearch(){

  const {
    setSearchValue,
    searchValue
  } = React.useContext( ProjectContext )

  return(
    <li>
      <div className='search'>
        <input 
          placeholder="Search Project"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
        }}/>
				<button><img alt='searchIcon' src={searchIcon}/></button>
      </div>
    </li>
    
  );
}

export { ProjectSearch };
