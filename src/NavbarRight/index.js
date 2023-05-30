import './NavbarRight.css';
import { ProjectUser } from './ProjectUser';

function NavbarRight(props) {
  return(
    <div className="navbar-right">
      <ul>
        {props.children}
      </ul>
    </div>  
    
  );
}
  
export { NavbarRight, ProjectUser  };
