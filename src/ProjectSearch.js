import './ProjectSearch.css';
import searchIcon from './icons/searchIcon.png';

function ProjectSearch() {
  return(
    <li>
      <div className='search'>
        <input type='text' placeholder="Search Project" />
				<button type='submit'><img src={searchIcon}/></button>
      </div>
    </li>
    
  );
}

export { ProjectSearch };
