import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();

  const [isOpenBurger, serIsOpenBurger] = useState<boolean>(false);
  const isActive = (path: string) =>
    location.pathname == path ? "active" : "";

  const toggleBurgerHandler = () => serIsOpenBurger((prev) => !prev);

  useEffect(() => {
    serIsOpenBurger(false);
  }, [location]);
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/">
              <p>A.Даврон</p>
            </Link>
          </div>
          <nav className="header__nav">
            <Link className={`header__link ${isActive("/")}`} to="/">
              Главная
            </Link>
            <Link className={`header__link ${isActive("/works")}`} to="/works">
              Портфолио
            </Link>
          </nav>
        </div>
      </header>
      <div
        onClick={toggleBurgerHandler}
        className={`burger__icon ${isOpenBurger ? "active" : null}`}
      >
        <span>menu</span>
      </div>
      <div className={`burger ${isOpenBurger ? "active" : null}`}>
        <nav className="burger__nav">
          <Link className={`header__link ${isActive("/")}`} to="/">
            Главная
          </Link>
          <Link className={`header__link ${isActive("/works")}`} to="/works">
            Портфолио
          </Link>
          <a className="my-mail" href="mailto:akdav01@mail.ru">
            akdav01@mail.ru
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
