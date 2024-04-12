import { Link } from 'react-router-dom';
const Title = () => <h1>PortFolio</h1>;
const NavBar = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Me</li>
            </Link>
            <Link to="/experience">
              <li>Experience</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
