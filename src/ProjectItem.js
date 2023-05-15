import './ProjectItem.css';

function ProjectItem(props) {
  
  return(
    <div class="projectItem">
	    <div class="color" style={{backgroundColor:props.color}}></div>
      <p>{ props.title }</p>
      <time>{ props.date }</time>
    </div>
  );
}

export { ProjectItem };
