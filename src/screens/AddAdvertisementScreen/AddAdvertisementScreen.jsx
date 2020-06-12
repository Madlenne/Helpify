import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Search from '../../components/Search/Search.jsx';
import AddAdvertisementDialog from '../../components/AddAdvertisementDialog/AddAdvertisementDialog.jsx';
import css from './AddAdvertisementScreen.module.scss';


const AddAdvertisementScreen = () => (
        <div className={css.container}>
            <Sidebar/>
            <Search/>
            <AddAdvertisementDialog/>

        </div>
    );

export default AddAdvertisementScreen;