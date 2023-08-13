import { NavLink } from 'react-router-dom';
import LittleLemonLogo from '../Assets/images/Logo.svg';


function Nav() {



    return (
        <div className="NavBar">
            <div className="logo">
            <img src={LittleLemonLogo} alt="Little Lemon Restaurant logo" />
            </div>
            <div className="nav-right-links">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/reservations'>Reservations</NavLink>
            </div>
  
        </div>
    );
    }
    
    export default Nav;