import './App.css';
import Home from './Pages/Home';
import Reservations from './Pages/Reservations';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
    </>
  );
}


export default App;
