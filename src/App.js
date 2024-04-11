import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePages';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/HomePages">Home</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/HomePages" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
// class App extends Component {
//   render() {
//       return (
//           <Router>
//               <div className="App">
//                   <ul className="App-header">
//                       <li>
//                           <Link to="/HomePages">Home</Link>
//                       </li>

//                   </ul>
//                   <Routes>
//                       <Route path="/HomePages" element={<Home/>}></Route>
//                   </Routes>
//               </div>
//           </Router>
//       );
//   }
// }
export default App;
