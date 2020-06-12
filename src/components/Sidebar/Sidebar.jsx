import React from 'react';
import css from './Sidebar.module.scss';
import Logo from '../../icons/office.png';
import Ads from '../../icons/notes2.png';
import AddAd from '../../icons/notes.png';
import User from '../../icons/user.png';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ openSidebar }) => (
        <div className={css.container}>
            <NavLink to="/" className={css.logo}>
                <img src={Logo}  alt="appLogo"/>
            </NavLink>

            <div className={css.menu}>
                <NavLink to="/wall" className={css.ads}>
                    <img src={Ads}  alt="ads"/>
                </NavLink>
                <NavLink to="/add" className={css.addAd}>
                    <img src={AddAd}  alt="addAd"/>
                </NavLink>
                {/* <NavLink to="/wall" className={css.user}> */}
                    <img src={User} onClick={openSidebar} className={css.user} alt="user"/>
                {/* </NavLink> */}
            </div>
        </div>

    );

export default Sidebar;