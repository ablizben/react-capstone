import './App.css';
import Home from './Pages/Home';
import Reservations from './Pages/Reservations';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
        <Link to='/'></Link>
        <Link to='/reservations'></Link>
        <Route exact path='/' component={Home} />
        <Route exact path='/reservations' component={Reservations} />
    </Router>
   </>
  );
}

export default App;
