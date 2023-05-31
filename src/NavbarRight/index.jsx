import './NavbarRight.css';
import { ProjectUser } from './ProjectUser';

function NavbarRight({ name }) {
  return(
    <div className="navbar-right">
      <ul>
        <ProjectUser
          name = {name}
        /> 
      </ul>
    </div>  
    
  );
}
  
export { NavbarRight };
