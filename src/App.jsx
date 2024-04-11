import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experiences from './pages/Experiences.jsx';

function App() {
return (
  <>
    <BrowserRouter>
    <div className="">
      <ul className="flex justify-center bg-slate-300 text-center p-4">
        <li className="m-2 text-red-900">
           <Link to="/home">Home</Link>
        </li> 
        <li className="m-2 text-red-900">
           <Link to="/about">About</Link>
        </li>
        <li className="m-2 text-red-900">
           <Link to="/experiences">Experiences</Link>
        </li>                
      </ul>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experiences" element={<Experiences />}></Route>
      </Routes>
    </div>
      
    </BrowserRouter>
  </>
);
}

export default App;
