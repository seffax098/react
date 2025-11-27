import { useState, useEffect } from "react";

function useTechnologiesApi() {
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTechnologies = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch("/technologies.json");
            if (!res.ok) {
                throw new Error("Не удалось загрузить список технологий");
            }

            const data = await res.json();
            setTechnologies(data);
        } catch (err) {
            console.error("Ошибка загрузки technologies.json:", err);
            setError("Не удалось загрузить технологии");
        } finally {
            setLoading(false);
        }
    };

    const addTechnology = async (techData) => {
        const newTech = {
            id: Date.now(),
            ...techData
        };

        setTechnologies(prev => [...prev, newTech]);
        return newTech;
    };

    useEffect(() => {
        fetchTechnologies();
    }, []);

    return {
        technologies,
        setTechnologies,
        loading,
        error,
        refetch: fetchTechnologies,
        addTechnology
    };
}

export default useTechnologiesApi;
