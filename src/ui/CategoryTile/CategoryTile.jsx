import React from 'react';

import css from './CategoryTile.module.scss';
import { NavLink } from 'react-router-dom';


const CategoryTile = ({ categoryIcon }) => {
return (
        <div className={css.container}>
            <NavLink to="/" >
                <img src={categoryIcon} alt={`${categoryIcon}`} className={css.icon}/>
            </NavLink>
        </div>
    );
}

export default CategoryTile;