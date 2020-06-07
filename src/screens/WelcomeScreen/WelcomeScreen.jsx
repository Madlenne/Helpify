import React from 'react';
// import Header from '../../components/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Search from '../../components/Search/Search.jsx';
import LoginDialog from '../../components/LoginDialog/LoginDialog.jsx';
import Background from '../../components/Background/Background.jsx';
import css from './WelcomeScreen.module.scss';


const WelcomeScreen = () => (
        <div className={css.container}>
            <Sidebar/>
            <Search/>
            <LoginDialog/>
            <Background/>

        </div>
    );

export default WelcomeScreen;