import './NavbarLeft.css';
import { ProjectIndex } from './ProjectIndex';
import { ProjectSearch } from './ProjectSearch';


function NavbarLeft(props) {
  return(
    <div className='navbar-left'>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}
  
export { NavbarLeft, ProjectIndex, ProjectSearch };
