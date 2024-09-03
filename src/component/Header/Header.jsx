import { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = memo(function Header() {
  return (
    <header className="flex flex-row justify-between">
      <div className="flex w-2/12 items-center justify-start">
        <img src="/logo.svg" width="150px" height="150px" alt="logo site" />
      </div>
      <div className="flex w-5/12 items-center justify-start">
        <nav>
          <ul className="flex items-center justify-center gap-20">
            <NavLink
              className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
              to="/books"
            >
              Books
            </NavLink>
            <NavLink
              className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
              to="/favorites"
            >
              Favorite
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;
