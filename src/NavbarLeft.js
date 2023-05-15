import './NavbarLeft.css';

function NavbarLeft(props) {
  return(
    <div className='navbar-left'>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}
  
export { NavbarLeft };
