import { useState } from "react";
import "./RoadmapImporter.css";

function RoadmapImporter({ addTechnology }) {
    const [importing, setImporting] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleImportRoadmap = async (roadmapUrl) => {
        try {
            setImporting(true);

            const response = await fetch(roadmapUrl);

            if (!response.ok) throw new Error("Не удалось загрузить дорожную карту");

            const roadmapData = await response.json();

            if (!Array.isArray(roadmapData.technologies)) {
                throw new Error("Некорректный формат дорожной карты");
            }


            for (const tech of roadmapData.technologies) {
                await addTechnology(tech);
            }

            alert(`Успешно импортировано ${roadmapData.technologies.length} технологий`);
            setInputValue("")
        } catch (err) {
            alert(`Ошибка импорта: ${err.message}`);
        } finally {
            setImporting(false);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        await handleImportRoadmap(inputValue.trim());
    };

    return (
        <div className="roadmap-importer">
            <h3>Импорт дорожной карты</h3>

            <form className="import-tech" onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Ссылка на API"
                    name="inputurl"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                />
                <button
                    type="submit"
                    disabled={importing}
                    className="import-button"
                >
                    {importing ? "Импорт..." : "Импорт пример дорожной карты"}
                </button>
            </form>
        </div>
    );
}

export default RoadmapImporter;
