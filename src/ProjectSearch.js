import './ProjectSearch.css';
import searchIcon from './icons/searchIcon.png';

function ProjectSearch() {
  return(
    <li>
      <div className='search'>
        <input 
          placeholder="Search Project"
          onChange={(event) => {
            console.log(event.target.value)
        }}/>
				<button type='submit'><img src={searchIcon}/></button>
      </div>
    </li>
    
  );
}

export { ProjectSearch };
