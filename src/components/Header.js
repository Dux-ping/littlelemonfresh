import Navbar from "../components/Navbar";
import logo from "../assets/images/Logo.svg";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import scrollWithOffset from "../components/scrollWithOffset";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link smooth to="/#home" className="logo-link" scroll={scrollWithOffset}>
          <img className="logo" src={logo} alt="Little Lemon Restaurant Logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
