import './ProjectItem.css';

function ProjectItem({ color,title,date,status,onStatus}) {

  const colorStatus = {
    'v': 'status-check--process',
    '~': 'status-check--detained',
    'x': 'status-check--abandoned'
  }

  return(
    <div className='projectItemContainer'>
      
      <div class="projectItem">
        
        <div class="color" style={{backgroundColor:color}}></div>
        <p>{ title }</p>
        <time>{ date }</time>

      </div>
      
      <div className='ProjectStatus'>
  
        <span onClick={onStatus} className={`status ${ colorStatus[status] } }`}>
          {status}
        </span>

      </div>
    </div>
  );
}

export { ProjectItem };
