import React from 'react';
import css from './Sidebar.module.scss';
import Logo from '../../icons/office.png';


const Sidebar = () => (
        <div className={css.container}>
           <img src={Logo} className={css.logo} alt="appLogo"/>
        </div>

    );

export default Sidebar;