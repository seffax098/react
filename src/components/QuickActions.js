import React from "react";
import "./QuickActions.css";

function QuickActions({setTechnologies}) {
    function markAll() {
        setTechnologies(prev =>
            prev.map(t =>
                ({ ...t, status: "completed" })
            )
        );
    }

    function resetAll() {
        setTechnologies(prev =>
            prev.map(t =>
                ({ ...t, status: "not-started" })
            )
        );
    }

    function pickRandom(id) {
        setTechnologies(prev => {
            if (!prev.length) return prev;
            const idxs = prev.map((_, i) => i);
            const notDone = idxs.filter(i => prev[i].status !== "completed");
            const pool = notDone.length ? notDone : idxs;
            const rnd = pool[Math.floor(Math.random() * pool.length)];
            return prev.map((t, i) => i === rnd ? { ...t, status: "in-progress" } : t);
        });
    }
    return (
        <div className="qa">
            <button className="qa__btn" onClick={markAll}>Отметить все как выполненные</button>
            <button className="qa__btn" onClick={resetAll}>Сбросить все статусы</button>
            <button className="qa__btn" onClick={pickRandom}>Случайный выбор следующей</button>
        </div>
    )
}

export default QuickActions;