import { Link } from 'react-router-dom';
import Filters from "../components/Filters";

function TechnologyList({ technologies, onNotesChange, onStatusChange }) {
    return (
        <div className="technologies__page page">
            <div className="page__header">
                <h2 className='header__title'>Все технологии</h2>
            </div>

            <div className="technologies">
                <Filters
                    items={technologies}
                    onStatusChange={onStatusChange}
                    onNotesChange={onNotesChange}
                />
            </div>


            {technologies.length === 0 && (
                <div className="empty-state">
                    <p>Технологий пока нет.</p>
                    <Link to="/add-technology" className="btn btn-primary">
                        Добавить первую технологию
                    </Link>
                </div>
            )}
        </div>
    );
}

export default TechnologyList;