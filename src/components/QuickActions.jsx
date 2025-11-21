import React from "react";
import "./QuickActions.css";

function QuickActions({ setTechnologies }) {
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

    function exportData() {
        setTechnologies(prev => {
            const exportObject = {
                exportedAt: new Date().toISOString(),
                technologies: prev
            };

            const json = JSON.stringify(exportObject, null, 2);
            console.log("Exported data:", json);

            // Скачивание файла:
            const blob = new Blob([json], { type: "application/json" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "technologies-export.json";
            a.click();

            URL.revokeObjectURL(url);

            return prev;  
        });
    }


    return (
        <div className="qa">
            <button className="qa__btn" onClick={markAll}>Отметить все как выполненные</button>
            <button className="qa__btn" onClick={resetAll}>Сбросить все статусы</button>
            <button className="qa__btn" onClick={exportData}>Экспорт данных</button>
        </div>
    )
}

export default QuickActions;