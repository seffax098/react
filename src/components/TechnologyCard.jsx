import React from "react";
import "./TechnologyCard.css";
import { useNavigate } from 'react-router-dom';
import TechnologyNotes from "./TechnologyNotes";

function TechnologyCard({ technologies, onNotesChange, onStatusChange }) {
    const newstatus = (tech) => {
        const newstat = tech.status === 'completed' ? "not-started" : tech.status === 'in-progress' ? "completed" : 'in-progress'
        return newstat
    }

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/technology/${id}`);
    };
    return (
        <div className="grid">
            {technologies.map(tech => (
                <div className={`tech-card ${tech.status === 'completed' ? "comp" : tech.status === 'in-progress' ? "prog" : 'ns'}`}
                    onClick={() => handleCardClick(tech.id)}>
                    <div key={tech.id} className="technology-item">
                        <h3>{tech.title}</h3>
                        <p>{tech.description}</p>
                        <div className="card-status">
                            <span className="status-sticker">{tech.status === "completed" ? "✅" : tech.status === "in-progress" ? "⏳" : "📅"}</span>
                            <button
                                type="button"
                                className="status-button"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onStatusChange?.(tech.id, newstatus(tech))
                                }}
                            >
                                Изменить статус
                            </button>
                        </div>
                        <TechnologyNotes
                            notes={tech.notes}
                            techId={tech.id}
                            onNotesChange={onNotesChange}
                        />
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default TechnologyCard;
