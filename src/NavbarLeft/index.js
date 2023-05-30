import './NavbarLeft.css';
import { ProjectIndex } from './ProjectIndex';
import { ProjectSearch } from './ProjectSearch';


function NavbarLeft({ searchValue, setSearchValue }) {
  return(
    <div className='navbar-left'>
      <ul>
        <ProjectIndex/>
        <ProjectSearch 
          searchValue = {searchValue} 
          setSearchValue = {setSearchValue} 
        />
      </ul>
    </div>
  );
}
  
export { NavbarLeft};
