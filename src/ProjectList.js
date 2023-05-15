import './ProjectList.css';

function ProjectList(props) {
  return(
    <div className="theProjets">
      {props.children}
    </div>
  );
}

export { ProjectList };
