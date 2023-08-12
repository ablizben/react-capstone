import { NavLink } from 'react-router-dom';
import HeaderImage  from '../Assets/images/header-image.png';

function Hero() {
    return (
     <>
      <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            <div className="section-right">
                <div className="image-box">
                <img src={HeaderImage} alt="Large table filled with food and drink"/>
                </div>
            </div>
        </div>
    </div>
     </>
    );
  }
  
  export default Hero;