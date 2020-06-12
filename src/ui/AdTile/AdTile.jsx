import React from 'react';

import css from './AdTile.module.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';


const cln = classnames.bind(css);


const AdTile = ({ isOdd, title, description }) => {
return (
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
    );
}

AdTile.propTypes = {
    isOdd: PropTypes.bool,
}

AdTile.defaultProps ={
    isOdd: false,
}

export default AdTile;