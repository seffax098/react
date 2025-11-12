import React from "react";
import "./TechnologyCard.css";

function TechnologyCard({ title, description, status = "not-started", onStatusChange }) {
    const next = status === "not-started" ? "in-progress" :
        status === "in-progress" ? "completed" :
            "not-started";

    return (
        <div className={`tech-card ${status === 'completed' ? "comp" : status === 'in-progress' ? "prog" : 'ns'}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-status">
                <span className="status-sticker">{status === "completed" ? "✅" : status === "in-progress" ? "⏳" : "📅"}</span>
                <button type="button" className="status-button" onClick={() => onStatusChange?.(next)}>
                    Изменить статус
                </button>
            </div>
        </div>
    );
}

export default TechnologyCard;
