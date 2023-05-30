import './ProjectList.css';
import { ProjectItem } from './ProjectItem';

function ProjectList(props) {
  return(
    <div className="theProjets">
      {props.children}
    </div>
  );
}

export { ProjectList, ProjectItem };
