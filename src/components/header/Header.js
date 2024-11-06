import logo from "../../assets/images/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Restaurant Logo" />
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About US</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
        </ul>
        <li>
          <a href="/reservation">Reservation</a>
        </li>
      </nav>
    </header>
  );
}

export default Header;
