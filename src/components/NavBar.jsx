import { Link } from 'react-router-dom';
import "../css/NavBar.css" 
function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home Page</Link> 
      </div>
      <div>
        <Link to="/favorites">♥</Link>
      </div>
    </nav>
  );
}

export default NavBar;
