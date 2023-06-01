import avatar from '../assets/img/avatar.jpg';
import './ProjectUser.css'; 

function ProjectUser(props) {
  return(
    <li>
      <img id='avatar' src={avatar} alt='avatar'/> 
      <p id='email' >{ props.name }@ucatolica.edu.co</p>
    </li>
  );
}

export { ProjectUser };
