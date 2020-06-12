import React, { useState, useEffect } from 'react';
import css from './Sidebar.module.scss';
import Logo from '../../icons/office.png';
import Ads from '../../icons/notes2.png';
import AddAd from '../../icons/notes.png';
import User from '../../icons/user.png';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ isUserLoggedIn, setIsUserLoggedIn, openSidebar }) => {

    // useEffect(() => {
    //     const logout = () => {
    //         setIsUserLoggedIn(false);
    
    //     }
    // }, [setIsUserLoggedIn]);
    const logout = () => {
        
        setIsUserLoggedIn(false);

    }
    
    return(
        <div className={css.container}>
            <NavLink to="/" className={css.logo}>
                <img src={Logo}  alt="appLogo"/>
            </NavLink>
        {!!isUserLoggedIn && 
            <div className={css.menu}>
                AAAA
                <NavLink to="/wall" className={css.ads}>
                    <img src={Ads}  alt="ads"/>
                </NavLink>
                <NavLink to="/add" className={css.addAd}>
                    <img src={AddAd}  alt="addAd"/>
                </NavLink>
                {/* <NavLink to="/wall" className={css.user}> */}
                    <img src={User} onClick={openSidebar} className={css.user} alt="user"/>
                {/* </NavLink> */}
                <img src={User} onClick={logout} className={css.user} alt="user"/>

            </div>
            }
        </div>

    )};

export default Sidebar;