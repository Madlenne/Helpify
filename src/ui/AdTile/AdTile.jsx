import React from 'react';

import css from './AdTile.module.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const cln = classnames.bind(css);


const AdTile = ({ isOdd, id, title, description }) => {
return (
    <NavLink to={`/ads/${id}`} className={css.navLink}>
        <div className={cln('container', {
            'container--green': isOdd
        })}>

            <div className={cln('title', {
            'title--white': isOdd
        })}>
                {title}
            </div>
            <div className={cln('description', {
            'description--white': isOdd
        })}>
                {description}
            </div>
            
        </div>
    </NavLink>
    );
}

AdTile.propTypes = {
    isOdd: PropTypes.bool,
}

AdTile.defaultProps ={
    isOdd: false,
}

export default AdTile;