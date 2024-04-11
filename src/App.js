import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/HomePages";


//import Component from "./components/Components";

// function App() {

//   return (
//     <div className="text-red-900 font-bold">
//        Hello Rea
//     </div>
//   );

// }
class App extends Component {
  render() {
      return (
          <Router>
              <div className="App ">
                  <ul className="App-header">
                      <li>
                          <Link to="/HomePages">Home</Link>
                      </li>
                      
                  </ul>
                  <Routes>
                      <Route path="/HomePages" element={<Home/>}></Route>
                  </Routes>
              </div>
          </Router>
      );
  }
}

export default App;
