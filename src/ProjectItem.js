import './ProjectItem.css';
import { StatusIcon } from './StatusIcon.js';

function ProjectItem({ color,title,date,status,onStatus }) {

  return(
    <div className='projectItemContainer'>
      
      <div class="projectItem">
        
        <div class="color" style={{ backgroundColor : color }}></div>
        <p>{ title }</p>
        <time>{ date }</time>

      </div>
      
      <div className='ProjectStatus'>
        <StatusIcon 
          status = {status} 
          onStatus = {onStatus} 
        />
      </div>
    </div>
  );
}

export { ProjectItem };
