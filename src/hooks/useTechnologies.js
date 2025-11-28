import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const initialTechnologies = [];

function useTechnologies() {
    const [technologies, setTechnologies] = useLocalStorage('technologies', initialTechnologies);

    useEffect(() => {
        if (!localStorage.getItem('technologies')) {
            fetch('/technologies.json')
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setTechnologies(data);
                    }
                })
                .catch(err => console.error('Ошибка загрузки technologies.json', err));
        }
    }, [setTechnologies]);

    const addTechnology = async (techData) => {
        const newTech = {
            id: Date.now(),
            ...techData
        };

        setTechnologies(prev => [...prev, newTech]);
        return newTech;
    };

    return {
        technologies,
        setTechnologies: setTechnologies,
        addTechnology
    };
}

export default useTechnologies;