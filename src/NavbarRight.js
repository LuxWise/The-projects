import './NavbarRight.css';

function NavbarRight(props) {
  return(
    <div className="navbar-right">
      <ul>
        {props.children}
      </ul>
    </div>  
    
  );
}
  
export { NavbarRight };
