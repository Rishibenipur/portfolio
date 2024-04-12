
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <>
        <div className="header">
            <div className="flex justify-center bg-purple-600 text-center p-4">
                <ul className="flex flex-row gap-4">
                    <Link to="/">
                        <li className="text-white">Home</li>   
                    </Link>
                    <Link to="/about">
                        <li className="text-white">About Me</li>
                    </Link>
                    <Link to="/experience">      
                        <li className="text-white">Experience</li>
                    </Link>
                    
                </ul>
            </div> 
            
        </div>
        </>
    )
};

export default NavBar;