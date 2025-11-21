import React from "react";
import "./App.css";
// import TechnologyCard from "./components/TechnologyCard";
// import Filters from "./components/Filters";
// import useTechnologies from './useTechnologies';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TechnologyList from "./pages/TechnologyList";
import AddTechnology from "./pages/AddTechnology";
import TechnologyDetail from "./pages/TechnologyDetail";
import ProgressHeader from "./components/ProgressHeader";
import QuickActions from "./components/QuickActions";
import useTechnologies from "./useTechnologies";

function App() {
    // const { technologies, updateStatus, updateNotes, setTechnologies } = useTechnologies();
    const {setTechnologies} = useTechnologies();

    return (
        <BrowserRouter>
            <div className="app">
                <Navigation />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/technologies" element={<TechnologyList />} />
                        <Route path="/add-technology" element={<AddTechnology />} />
                        <Route path="/statistics" element={<ProgressHeader />} />
                        <Route path="/settings" element={<QuickActions setTechnologies={setTechnologies}/>} />
                        <Route path="/technology/:techId" element={<TechnologyDetail />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
        // <div className="container">
        //     <h1>Дорожная карта технологий</h1>
        //     <div className="progress--bar">
        //         <ProgressHeader
        //             items={technologies}
        //         />
        //     </div>
        //     <div className="qa--bar">
        //         <QuickActions
        //             setTechnologies={setTechnologies}
        //         />
        //     </div>
        //     <div className="filter--bar">
        //         <Filters
        //             items={technologies}
        //             renderItem={(t) => (
        //                 <TechnologyCard
        //                     id={t.id}
        //                     key={t.id}
        //                     title={t.title}
        //                     description={t.description}
        //                     status={t.status}
        //                     notes={t.notes}
        //                     onStatusChange={(next) => updateStatus(t.id, next)}
        //                     onNotesChange={updateNotes}
        //                 />
        //             )}
        //         />
        //     </div>
        // </div>
    );
}

export default App