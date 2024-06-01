import './NavBar.css';
// import Link from 'react-router';
function NavBar(){
   return (
    <nav>
        <ul className="navBar">
            {/* <li className='nav-item'><Link to="">Home</Link></li>
            <li className='nav-item'><Link to="">About</Link></li>
            <li className='nav-item'><Link to="">Home</Link></li>
            <li className='nav-item'><Link to="">Home</Link></li> */}
            <li className='nav-item'><a href="">Home</a></li>
            <li className='nav-item'><a href="">Skills</a></li>
            <li className='nav-item'><a href="">Projects</a></li>
            <li className='nav-item'><a href="">Contact me</a></li> 
        </ul>
    </nav>
    )
}
export default NavBar;