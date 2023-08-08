import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Header: FC = () => {
    const location = useLocation();

    const isActive = (path:string) => location.pathname == path ? 'active' : '';



    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <a href="index.html"><p>A.Даврон</p></a>
                </div>
                <nav className="header__nav">
                    <Link className={`header__link ${isActive('/')}`} to="/">Главная</Link>
                    <Link className={`header__link ${isActive('/works')}`} to="/works">Портфолио</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;