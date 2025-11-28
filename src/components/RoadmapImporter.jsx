import { useState } from "react";
import "./RoadmapImporter.css";

function RoadmapImporter({ setTechnologies }) {
    const [importing, setImporting] = useState(false);
    const [success, setSuccess] = useState(false)

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (file.type !== "application/json" && !file.name.endsWith(".json")) {
            alert("Пожалуйста, выберите файл в формате JSON");
            event.target.value = "";
            return;
        }

        setImporting(true);

        const reader = new FileReader();

        reader.onload = () => {
            try {
                const text = reader.result;
                const roadmapData = JSON.parse(text);

                if (!Array.isArray(roadmapData.technologies)) {
                    throw new Error("Некорректный формат дорожной карты (ожидается поле 'technologies' - массив)");
                }

                setTechnologies(roadmapData.technologies);

                setSuccess(true)
                setTimeout(() => setSuccess(false), 3000)
                event.target.value = "";
            } catch (err) {
                alert(`Ошибка импорта: ${err.message}`);
            } finally {
                setImporting(false);
            }
        };

        reader.onerror = () => {
            alert("Не удалось прочитать файл");
            setImporting(false);
        };

        reader.readAsText(file);
    };

    return (
        <div className="roadmap-importer">
            <h3>Импорт дорожной карты</h3>

            <div className="import-tech">
                <input
                    type="file"
                    accept="application/json,.json"
                    onChange={handleFileChange}
                    disabled={importing}
                    className="input"
                />
                {importing && <span className="import-status">Импорт...</span>}
                {success &&
                    <div className="form__info">
                        <p className="add__info">Технологии успешно импортированы</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default RoadmapImporter;
