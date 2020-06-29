import React from 'react';

import css from './AdPreview.module.scss';
import { NavLink } from 'react-router-dom';


const AdPreview = ({ id, title, description, category }) => {
return (
    <NavLink to={`/ads/${id}`} className={css.navLink}>
        <div className={css.container}>

            <div className={css.title}>
                {title}
            </div>
            <div className={css.description}>
                {description ? description.substring(0,30) : ''}
            </div>
            <div className={css.category}>
                
                <img src={category} alt={`${category}`} className={css.icon}/>

            </div>
            
        </div>
        </NavLink>
    );
}

AdPreview.propTypes = {
}

AdPreview.defaultProps ={
}

export default AdPreview;