import { useState } from "react";
import "./AddTechnology.css";

function AddTechnology({ addTechnology }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await addTechnology({
            "title": title,
            "description": description,
            "status": "not-started",
            "notes": ""
        });

        alert("Успешно")
        setTitle("")
        setDescription("")
    }

    return (
        <div className="page add__page">
            <div className="page__header">
                <h2 className='header__title'>Добавление технологий</h2>
            </div>
            <form className="import-form" onSubmit={handleSubmit}>
                <label className="form__name">
                    Введите название технологии
                    <input
                        className="input__name"
                        type="text"
                        placeholder="Название технологии"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </label>
                <label className="form__description">
                    Введите описание технологии
                    <input
                        className="input__description"
                        type="text"
                        placeholder="Описание технологии"
                        name="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="import-button"
                >
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default AddTechnology;