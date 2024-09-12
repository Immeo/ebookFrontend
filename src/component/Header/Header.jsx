import { memo, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = memo(function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  return (
    <header className="flex flex-row justify-between">
      <div className="flex w-2/12 items-center justify-start">
        <NavLink to="/">
          <img
            src="/logo.svg"
            width="150px"
            height="150px"
            alt="logo site"
            className="cursor-pointer"
          />
        </NavLink>
      </div>
      <div className="flex w-5/12 items-center justify-start">
        <nav>
          <ul className="flex items-center justify-center gap-20">
            <li>
              <NavLink
                className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
                to="/"
              >
                Главная
              </NavLink>
            </li>
            <li>
              <button
                className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
                type="button"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                Книги
              </button>
              <ul
                className={`absolute ${isOpenMenu == true ? "block" : "hidden"} mt-2 w-48 rounded-md bg-bg-action p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <li>
                  <NavLink
                    className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
                    to="/authors"
                  >
                    По авторам
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
                    to="/genres"
                  >
                    По жанрам
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="translate-x-1 cursor-pointer break-words text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
                    to="/publishings"
                  >
                    По издателю
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
                    to="/books"
                  >
                    Все книги
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
                to="/favorites"
              >
                Избранное
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;
