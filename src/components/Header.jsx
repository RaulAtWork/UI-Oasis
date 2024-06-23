import { NavLink } from "react-router-dom";

const NAVIGATION_LINKS = [
  { path: "/", name: "Home" },
  { path: "/components", name: "Components" },
  { path: "/advice", name: "Advice" },
];

function Header() {
  return (
    <header>
      <span className="header-title">UI Oasis v0.1</span>
      <nav className="header-nav">
        <ul>
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
