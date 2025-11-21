import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <nav className="main-navigation">
            <div className="nav-brand">
                <Link to="/">
                    <h2>🚀 Трекер технологий</h2>
                </Link>
            </div>

            <ul className="nav-menu">
                <li>
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Главная
                    </Link>
                </li>
                <li>
                    <Link
                        to="/technologies"
                        className={location.pathname === '/technologies' ? 'active' : ''}
                    >
                        Все технологии
                    </Link>
                </li>
                <li>
                    <Link
                        to="/add-technology"
                        className={location.pathname === '/add-technology' ? 'active' : ''}
                    >
                        Добавить технологию
                    </Link>
                </li>
                <li>
                    <Link
                        to="/statistics"
                        className={location.pathname === '/statistics' ? 'active' : ''}
                    >
                        Статистика
                    </Link>
                </li>
                <li>
                    <Link
                        to="/settings"
                        className={location.pathname === '/settings' ? 'active' : ''}
                    >
                        Найстройки
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;