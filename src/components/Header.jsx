import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="about">about</NavLink>
            </li>
            <li>
              <NavLink to="search">search</NavLink>
            </li>
            <li>
              <NavLink to="login">login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </div>
  );
}

export default Header;
