import './ProjectItem.css';

function ProjectItem({ color,title,date,status }) {
  
  return(
    <div className='projectItemContainer'>
      <div class="projectItem">
        <div class="color" style={{backgroundColor:color}}></div>
        <p>{ title }</p>
        <time>{ date }</time>
      </div>
      <div className='ProjectStatus'>
        <span>{status}</span>
      </div>
    </div>
  );
}

export { ProjectItem };
