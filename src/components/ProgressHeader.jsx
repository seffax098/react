import "./ProgressHeader.css";

function ProgressHeader({ items = [] }) {
    const total = items.length;
    const completed = items.filter(i => i.status === "completed").length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
        <div className="ph">
            <h2>Изучено {completed} из {total} ({percent}%)</h2>
            <div
                className="ph__bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
            >
                <div className="ph__bar-fill" style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}

export default ProgressHeader;
