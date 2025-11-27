import React, { useState, useEffect } from "react";
import "./Filters.css";
import TechnologyCard from "./TechnologyCard";

const OPTIONS = [
    { value: "all", label: "Все" },
    { value: "not-started", label: "Не начато" },
    { value: "in-progress", label: "В процессе" },
    { value: "completed", label: "Выполнено" },
];

export default function Filters({ items = [], onStatusChange, onNotesChange }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [active, setActive] = useState("all");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300); 
        
        return () => clearTimeout(handler);
    }, [searchQuery]);

    const filteredBySearch = items.filter(tech =>
        tech.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        tech.description.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    const filtered = filteredBySearch.filter(t =>
        active === "all" ? true : t.status === active
    );

    return (
        <div className="filters">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Поиск технологий..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span>Найдено: {filtered.length}</span>
            </div>

            <div
                className="filters__tabs"
                role="tablist"
                aria-label="Фильтр технологий"
            >
                {OPTIONS.map(opt => {
                    const isActive = active === opt.value;
                    return (
                        <button
                            key={opt.value}
                            role="tab"
                            aria-selected={isActive}
                            type="button"
                            className={`filters__tab ${isActive ? "is-active" : ""}`}
                            onClick={() => setActive(opt.value)}
                        >
                            <span>{opt.label}</span>
                        </button>
                    );
                })}
            </div>

            <div className="filters__list">
                <TechnologyCard 
                technologies={filtered} 
                onStatusChange={onStatusChange}
                onNotesChange={onNotesChange}
                />
            </div>
        </div>
    );
}
