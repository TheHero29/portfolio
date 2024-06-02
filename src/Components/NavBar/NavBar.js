import './NavBar.css';
import {Link} from 'react-router-dom';
function NavBar(){
   return (
    <nav>
        <ul className="navBar">
            <li className='nav-item'><Link to="/">Home</Link></li>
            <li className='nav-item'><Link to="/skills">Skills</Link></li>
            <li className='nav-item'><Link to="">Projects</Link></li>
            <li className='nav-item'><Link to="">Contact Me</Link></li>
        </ul>
    </nav>
    )
}
export default NavBar;