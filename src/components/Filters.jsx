import React, { useState } from "react";
import "./Filters.css";

const OPTIONS = [
    { value: "all", label: "Все" },
    { value: "not-started", label: "Не начато" },
    { value: "in-progress", label: "В процессе" },
    { value: "completed", label: "Выполнено" },
];

export default function Filters({ items = [], renderItem }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTechnologies = items.filter(tech =>
        tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [active, setActive] = useState("all");

    const filtered = filteredTechnologies.filter(t =>
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
                <span>Найдено: {filteredTechnologies.length}</span>
            </div>
            <div className="filters__tabs" role="tablist" aria-label="Фильтр технологий">
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
                {filtered.map(item => renderItem(item))}
            </div>
        </div>
    );
}
