import React, { useState } from "react";
import "./App.css";
import TechnologyCard from "./components/TechnologyCard";
import ProgressHeader from "./components/ProgressHeader";
import QuickActions from "./components/QuickActions";
import Filters from "./components/Filters";

function App() {
    const [technologies, setTechnologies] = useState([
        {
            id: 1,
            title: 'React Components',
            description: 'Изучение базовых компонентов',
            status: 'not-started'
        },
        {
            id: 2,
            title: 'JSX Syntax',
            description: 'Освоение синтаксиса JSX',
            status: 'not-started'
        },
        {
            id: 3,
            title: 'State Management',
            description: 'Работа с состоянием компонентов',
            status: 'not-started'
        }
    ]);

    function changeStatus(id, nextStatus) {
        setTechnologies(prev =>
            prev.map(t =>
                t.id === id ? { ...t, status: nextStatus } : t
            )
        );
    }


    return (
        <div className="container">
            <h1>Дорожная карта технологий</h1>
            <div className="progress--bar">
                <ProgressHeader
                    items={technologies}
                />
            </div>
            <div className="qa--bar">
                <QuickActions
                    setTechnologies={setTechnologies}
                />
            </div>
            <div className="filter--bar">
                <Filters
                    items={technologies}
                    renderItem={(t) => (
                        <TechnologyCard
                            key={t.id}
                            title={t.title}
                            description={t.description}
                            status={t.status}
                            onStatusChange={(next) => changeStatus(t.id, next)}
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default App