import React from 'react';

import css from './CategoryTile.module.scss';


const CategoryTile = ({ categoryIcon, onClick }) => {
return (
        <div className={css.container} onClick={onClick}>
            <img src={categoryIcon} alt={`${categoryIcon}`} className={css.icon}/>
        </div>
    );
}

export default CategoryTile;