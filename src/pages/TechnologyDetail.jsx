import { useParams, Link } from 'react-router-dom';
import TechnologyNotes from '../components/TechnologyNotes';

function TechnologyDetail({ technologies, onStatusChange, onNotesChange }) {
    const { techId } = useParams();

    const id = Number(techId);
    const technology = Array.isArray(technologies)
        ? technologies.find(t => t.id === id)
        : null;


    if (!technology) {
        return (
            <div className="page">
                <h1>Технология не найдена</h1>
                <p>Технология с ID {techId} не существует.</p>
                <Link to="/technologies" className="btn">
                    Назад к списку
                </Link>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="page-header">
                <Link to="/technologies" className="back-link">
                    Назад к списку
                </Link>
                <h1>{technology.title}</h1>
            </div>

            <div className="technology-detail">
                <div className="detail-section">
                    <h3>Описание</h3>
                    <p>{technology.description}</p>
                </div>

                <div className="detail-section">
                    <h3>Статус изучения</h3>
                    <div className='current-status'>
                        <p>{technology.status === "not-started" ? "Не начато" :
                            technology.status === "in-progress" ? "В процессе" : "Выполнено"}</p>
                    </div>
                    <div className="status-buttons">
                        <button
                            onClick={() => onStatusChange(technology.id, 'not-started')}
                            className={technology.status === 'not-started' ? 'active status-button' : 'status-button'}
                        >
                            Не начато
                        </button>
                        <button
                            onClick={() => onStatusChange(technology.id, 'in-progress')}
                            className={technology.status === 'in-progress' ? 'active status-button' : 'status-button'}
                        >
                            В процессе
                        </button>
                        <button
                            onClick={() => onStatusChange(technology.id, 'completed')}
                            className={technology.status === 'completed' ? 'active status-button' : 'status-button'}
                        >
                            Выполнено
                        </button>
                    </div>
                </div>


                <div className="detail-section">
                    <h3>Мои заметки</h3>
                    <TechnologyNotes
                        notes={technology.notes}
                        techId={technology.id}
                        onNotesChange={onNotesChange}
                    />
                </div>

            </div>
        </div>
    );
}

export default TechnologyDetail;