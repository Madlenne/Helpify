import React, {useState} from 'react';
import css from './Search.module.scss';
import SearchIcon from '../../icons/loupe.png';


const Search = () =>{
    
    const [searchedValue, setSearchedValue] = useState('');

    const handleOnChange = (event) => {
       setSearchedValue(event.target.value);
    }

    const search = () => {
    }
    return(
        <div className={css.container}>
            <div className={css.search}>
                <input type="text" value={searchedValue} onKeyUp={search} onChange={handleOnChange} className={css.input} placeholder="Search..."/>
                <img src={SearchIcon} className={css.icon} onClick={search} alt="magnifyingGlass"/>

            </div>

           
            </div>

    )};

export default Search;