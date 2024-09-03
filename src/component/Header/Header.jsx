import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between">
      <div className="flex w-2/12 items-center justify-start">
        <img src="/logo.svg" alt="logo site" />
      </div>
      <div className="flex w-5/12 items-center justify-start">
        <nav>
          <ul className="flex items-center justify-center gap-20">
            <NavLink
              className="cursor-pointer hover:[color:var(--main-color)]"
              to="/books"
            >
              Books
            </NavLink>
            <NavLink
              className="cursor-pointer hover:[color:var(--main-color)]"
              to="/favorites"
            >
              Favorite
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
