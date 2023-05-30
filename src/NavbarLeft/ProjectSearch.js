import React from 'react';
import './ProjectSearch.css';
import searchIcon from '../icons/searchIcon.png';

function ProjectSearch({
  searchValue,
  setSearchValue,
}){
/* const [searchValue, setSearchValue] = React.useState('');
    console.log('se buscan los proyectos de ' + searchValue); */

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
