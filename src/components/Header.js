import Navbar from "../components/Navbar";
import logo from "../assets/images/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo-link">
          <img className="logo" src={logo} alt="Little Lemon Restaurant Logo" />
        </a>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
