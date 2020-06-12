import React, {useState} from 'react';
import SaveIcon from '../../icons/floppy-disk.png';
import css from './AddAdvertisementDialog.module.scss';

const URL = "http://localhost:8082/api/v1/advertisements";

const AddAdvertisementDialog = () =>{
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');


    const handleOnChange = (event, setter) => {
        setter(event.target.value);
    }

    const handleOnSubmit = async (event) => {

        event.preventDefault();
        
                const payload = {
                    "title": title,
                    "category": category,
                    "description": description
                }
                console.log(payload);

            //    await fetch(URL, {
            //         method: 'POST',
            //         headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify(payload)
            //     })
            //     .then(response => response.json())
            //     .then(data => {
            //             console.log(data);
            //             setTitle('');
            //             setCategory('');
            //             setDescription('');
            //     })

    // }
    
        
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return(
        <div className={css.container}>
            <div className={css.title}>
                Dodaj ogloszenie
            </div>
            <form onSubmit={handleOnSubmit} className={css.form}>
                <div className={css.adTitle}>
                    <label>Tytuł</label>
                    <input type="text" value={title}  onChange={(event) => handleOnChange(event, setTitle)} className={css.input} />
                </div>
                <div className={css.category}>
                    <label>Kategoria</label>
                    <select onChange={handleCategoryChange} className={css.categorySelect}>
                        <option value="study">Pomoc w nauce</option>
                        <option value="deal">Zamiana</option>
                        <option value="sport">Sport</option>
                        <option value="info">Informacje</option>

                    </select>
                    {/* <input type="password"  onChange={(event) => handleOnChange(event)} className={css.input} /> */}
                </div>
                <div className={css.description}>
                    <label>Opis</label>
                    <textarea onChange={(event) => handleOnChange(event, setDescription)}></textarea>
                </div>

                <button type="submit" className={css.submitButton} > <img src={SaveIcon} alt="saveIcon" className={css.saveIcon}/> </button>
             </form>

           
            </div>

    )};

export default AddAdvertisementDialog;