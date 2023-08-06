import { NavLink } from 'react-router-dom';

function Nav() {
    return (
     <>
      <ul>
        <li><NavLink to="/" className="active-links">Home</NavLink></li>
        <li><NavLink to="#" className="active-links">About</NavLink></li>
        <li><NavLink to="#" className="active-links">Menu</NavLink></li>
        <li><NavLink to="/" className="active-links">Reservations</NavLink></li>
      </ul>
     </>
    );
  }
  
  export default Nav;