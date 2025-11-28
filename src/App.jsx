import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTechnology from "./pages/AddTechnology";
import TechnologyList from "./pages/TechnologyList";
import TechnologyDetail from "./pages/TechnologyDetail";
import ProgressHeader from "./components/ProgressHeader";
import QuickActions from "./components/QuickActions";
import RoadmapImporter from "./components/RoadmapImporter";
import useTechnologiesApi from "./hooks/useTechnologiesApi";
import useTechnologies from "./hooks/useTechnologies";

function App() {
    const {
        technologies,
        setTechnologies,
        loading,
        error,
        refetch,
        addTechnology
    } = useTechnologiesApi();

    // const {
    //     technologies,
    //     setTechnologies,
    //     loading,
    //     error,
    //     refetch,
    //     addTechnology
    // } = useTechnologies();

    const handleStatusChange = (id, newStatus) => {
        setTechnologies(prev =>
            prev.map(t =>
                t.id === id ? { ...t, status: newStatus } : t
            )
        );
    };

    const handleNotesChange = (id, newNotes) => {
        setTechnologies(prev =>
            prev.map(t =>
                t.id === id ? { ...t, notes: newNotes } : t
            )
        );
    };


    if (loading) {
        return (
            <div className="app-loading">
                <p>Загрузка технологий...</p>
            </div>
        );
    }

    return (
        <div className="container">
            <BrowserRouter>
                <div className="app">
                    <Navigation />

                    <main className="main-content">
                        {error && (
                            <div className="app-error">
                                <p>{error}</p>
                                <button onClick={refetch}>Попробовать снова</button>
                            </div>
                        )}

                        <Routes>
                            <Route path="/" element={<Home />} />

                            <Route
                                path="/technologies"
                                element={
                                    <>
                                        <TechnologyList
                                            technologies={technologies}
                                            onStatusChange={handleStatusChange}
                                            onNotesChange={handleNotesChange}
                                        />
                                    </>
                                }
                            />

                            <Route
                                path="/add-technology"
                                element={<AddTechnology addTechnology={addTechnology} />}
                            />

                            <Route
                                path="/statistics"
                                element={<ProgressHeader items={technologies} />}
                            />

                            <Route
                                path="/settings"
                                element={
                                    <>
                                        <QuickActions setTechnologies={setTechnologies} />
                                        <RoadmapImporter setTechnologies={setTechnologies}/>
                                    </>
                                }
                            />

                            <Route
                                path="/technology/:techId"
                                element={<TechnologyDetail
                                    technologies={technologies}
                                    onStatusChange={handleStatusChange}
                                    onNotesChange={handleNotesChange}
                                />}
                            />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;