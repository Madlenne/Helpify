import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Search from '../../components/Search/Search.jsx';
import AdvertisementCard from '../../components/AdvertisementCard/AdvertisementCard.jsx';
import css from './AdvertisementScreen.module.scss';


const AdvertisementScreen = () => (
        <div className={css.container}>
            <Sidebar/>
            <Search/>
            <AdvertisementCard/>

        </div>
    );

export default AdvertisementScreen;