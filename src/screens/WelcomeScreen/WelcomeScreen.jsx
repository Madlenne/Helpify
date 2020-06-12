import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Search from '../../components/Search/Search.jsx';
import LoginDialog from '../../components/LoginDialog/LoginDialog.jsx';
import Background from '../../components/Background/Background.jsx';
import css from './WelcomeScreen.module.scss';


const WelcomeScreen = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return(
        <div className={css.container}>
            <Sidebar isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>
            <Search/>
            <LoginDialog setIsUserLoggedIn={setIsUserLoggedIn}/>
            <Background/>

        </div>
    )};

export default WelcomeScreen;