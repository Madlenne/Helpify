import React from 'react';
import PropTypes from 'prop-types';

import css from './Sidebar.module.scss';
import Logo from '../../icons/office.png';
import Ads from '../../icons/notes2.png';
import AddAd from '../../icons/notes.png';
import User from '../../icons/user.png';
import Logout from '../../icons/logout.png';
import { NavLink, useHistory} from 'react-router-dom';


const Sidebar = ({ isUserLoggedIn, setIsUserLoggedIn, openSidebar }) => {
    const history = useHistory();

    const logout = () => {
        
        sessionStorage.removeItem("userId");
        history.push("/");

    }

    return(
        <div className={css.container}>
            <NavLink to="/" className={css.logo}>
                <img src={Logo}  alt="appLogo"/>
            </NavLink>
        {(Boolean(isUserLoggedIn) || Boolean(sessionStorage.getItem("userId"))) && 
            <div className={css.menu}>
                <NavLink to="/wall" className={css.ads}>
                    <img src={Ads}  alt="ads"/>
                </NavLink>
                <NavLink to="/add" className={css.addAd}>
                    <img src={AddAd}  alt="addAd"/>
                </NavLink>
                    <img src={User} onClick={openSidebar} className={css.user} alt="user"/>
                <img src={Logout} onClick={logout} className={css.user} alt="user"/>

            </div>
            }
        </div>

    )};

Sidebar.propTypes = {
    setIsUserLoggedIn: PropTypes.func,
} 

Sidebar.defaultTypes = {
    setIsUserLoggedIn: () => {}
}

export default Sidebar;