import React from "react";
import "./App.css";
import TechnologyCard from "./components/TechnologyCard";
import ProgressHeader from "./components/ProgressHeader";
import QuickActions from "./components/QuickActions";
import Filters from "./components/Filters";
import useTechnologies from './useTechnologies';

function App() {
    const { technologies, updateStatus, updateNotes, setTechnologies } = useTechnologies();

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
                            id={t.id}
                            key={t.id}
                            title={t.title}
                            description={t.description}
                            status={t.status}
                            notes={t.notes}
                            onStatusChange={(next) => updateStatus(t.id, next)}
                            onNotesChange={updateNotes}
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default App