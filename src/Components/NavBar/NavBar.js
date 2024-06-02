import './NavBar.css';
import {Link} from 'react-router-dom';
function NavBar(){
   return (
    <nav>
        <ul className="navBar">
            <li className='nav-item'><Link to="/">Home</Link></li>
            <li className='nav-item'><Link to="/skills">Skills</Link></li>
            <li className='nav-item'><Link to="/projects">Projects</Link></li>
            <li className='nav-item'>
                {/* <Link to="">My Resume</Link> */}
                <a href="">Resume</a>
            </li>
        </ul>
    </nav>
    )
}
export default NavBar;