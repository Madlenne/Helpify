import React from 'react';
// import study from '../../icons/lifebuoy.png';
// import deal from '../../icons/agreement.png';
// import sport from '../../icons/ball.png';
// import info from '../../icons/info.png';
import css from './AdPreview.module.scss';
import { NavLink } from 'react-router-dom';

// import classnames from 'classnames/bind';
import PropTypes from 'prop-types';


// const cln = classnames.bind(css);


const AdPreview = ({ id, title, description, category }) => {
    console.log(description);
return (
    <NavLink to={`/ads/${id}`} className={css.navLink}>
        <div className={css.container}>

            <div className={css.title}>
                {title}
            </div>
            <div className={css.description}>
                {description.substring(0,30)}
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