import useLocalStorage from './useLocalStorage';

const initialTechnologies = ".../public.json"

function useTechnologies() {
    const [technologies, setTechnologies] = useLocalStorage('technologies', initialTechnologies);

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