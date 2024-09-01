import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between">
      <div>
        <img src="/logo.svg" alt="logo site" />
      </div>
      <div>
        <nav>
          <ul>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
