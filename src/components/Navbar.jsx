import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="header">
        <div className="flex justify-center bg-purple-600 text-center p-4">
          <ul className="flex flex-row gap-4 text-white">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/experience">Experience</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
