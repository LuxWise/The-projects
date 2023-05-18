import './ProjectItem.css';

function ProjectItem({ color,title,date,status }) {

  const process = 'v';
  const detained = '~';

  let colorStatus = 
    status == process ? 'status-check--prosess' :
    status == detained ? 'status-check--detailed': 'status-check--abandoned';
  
  return(
    <div className='projectItemContainer'>
      
      <div class="projectItem">
        
        <div class="color" style={{backgroundColor:color}}></div>
        <p>{ title }</p>
        <time>{ date }</time>

      </div>
      
      <div className='ProjectStatus'>
  
        <span className={`status ${ colorStatus } }`}>
          {status}
        </span>

      </div>
    </div>
  );
}

export { ProjectItem };
