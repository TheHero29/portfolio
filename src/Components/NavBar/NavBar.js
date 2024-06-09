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
                <a href="https://drive.google.com/file/d/15TWs7ehvtfcRA65Y-jLyS9PZ4-O89uJV/view?usp=sharing" target='_blank'>Resume</a>
            </li>
        </ul>
    </nav>
    )
}
export default NavBar;