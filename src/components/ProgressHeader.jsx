import "./ProgressHeader.css";

function ProgressHeader({ items = [] }) {
    const total = items.length;
    const completed = items.filter(i => i.status === "completed").length;
    const inProgress = items.filter(i => i.status === "in-progress").length;
    const notStarted = items.filter(i => i.status === "not-started").length;


    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
        <div className="ph">
            <div className="ph__top">
                <h1>Статистика</h1>
            </div>
            <div className="ph__stats">
                <span className="ph__stat">Не начато: {notStarted}</span>
                <span className="ph__stat">В процессе: {inProgress}</span>
                <span className="ph__stat">Изучено: {completed}</span>
                <span className="ph__stat">Всего: {total}</span>
            </div>
            <div className="ph__bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} aria-label="Прогресс изучения">
                <div className="ph__bar-fill" style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}

export default ProgressHeader