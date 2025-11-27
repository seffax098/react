import { Link, useLocation } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {
    const location = useLocation();

    return (
        <nav className="main-navigation">
            <div className="nav__logo">
                <Link to="/" className="logo__link">
                    <h1 className="logo">Трекер технологий</h1>
                </Link>
            </div>

            <ul className="nav__list">
                <li className={location.pathname === '/' ? 'nav__item item__active' : 'nav__item'}>
                    <Link
                        to="/"
                        className='nav__link'
                    >
                        Главная
                    </Link>
                </li>
                <li className={location.pathname === '/technologies' ? 'nav__item item__active' : 'nav__item'}>
                    <Link
                        to="/technologies"
                        className='nav__link'
                    >
                        Все технологии
                    </Link>
                </li>
                <li className={location.pathname === '/add-technology' ? 'nav__item item__active' : 'nav__item'}>
                    <Link
                        to="/add-technology"
                        className='nav__link'
                    >
                        Добавить технологию
                    </Link>
                </li>
                <li className={location.pathname === '/statistics' ? 'nav__item item__active' : 'nav__item'}>
                    <Link
                        to="/statistics"
                        className='nav__link'
                    >
                        Статистика
                    </Link>
                </li>
                <li className={location.pathname === '/settings' ? 'nav__item item__active' : 'nav__item'}>
                    <Link
                        to="/settings"
                        className='nav__link'
                    >
                        Найстройки
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;