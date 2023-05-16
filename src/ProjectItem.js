import './ProjectItem.css';

function ProjectItem({ color,title,date,status }) {

  const process = 'v';
  const detained = '~';
  const abandoned = 'x';

  let colorStatus;

  switch(status) {
    case process:
      colorStatus = 'status-check--prosess';
      break;
    case detained :
      colorStatus = 'status-check--detailed';
      break;
    case abandoned:
      colorStatus = 'status-check--abandoned';
      break;
    default:
      colorStatus = 'status-check--abandoned';
  }

  return(
    <div className='projectItemContainer'>
      <div class="projectItem">
        <div class="color" style={{backgroundColor:color}}></div>
        <p>{ title }</p>
        <time>{ date }</time>
      </div>
      <div className='ProjectStatus'>
        <span className={`status ${colorStatus}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

export { ProjectItem };
