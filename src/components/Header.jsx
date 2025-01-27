import { NavLink } from "react-router-dom";

const NAVIGATION_LINKS = [
  { path: "/", name: "Home" },
  { path: "/components", name: "Components" },
  { path: "/uiux", name: "UI/UX" },
];

function Header() {
  return (
    <header>
      <span className="header-title">
        <NavLink to={NAVIGATION_LINKS[0].path}>
          <img className="header-logo" src="/images/OasisUI_Logo.png" /> <span>v1.0</span>
        </NavLink>
      </span>

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
