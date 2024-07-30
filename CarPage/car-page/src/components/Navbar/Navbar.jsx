import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo">EV-olution</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="nav-content">Content</li>
        </ul>
    </div>
  );
}

export default Navbar;