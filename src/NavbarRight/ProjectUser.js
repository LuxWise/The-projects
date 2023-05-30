import avatar from '../img/alex-suprun-bYODySpLIhE-unsplash.jpg';
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
