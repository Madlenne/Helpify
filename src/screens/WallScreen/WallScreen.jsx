import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Search from '../../components/Search/Search.jsx';
import AdPreview from '../../components/AdPreview/AdPreview.jsx';
import CategoryTile from '../../ui/CategoryTile/CategoryTile.jsx';
import study from '../../icons/lifebuoy.png';
import deal from '../../icons/agreement.png';
import sport from '../../icons/ball.png';
import info from '../../icons/info.png';
import classnames from 'classnames/bind';

import AdTile from '../../ui/AdTile/AdTile.jsx';

import css from './WallScreen.module.scss';
const cln = classnames.bind(css);

const URL = "http://localhost:8082/api/v1/advertisements"

const WallScreen = () => {

    const [ads, setAds] = useState([]);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await fetch(URL)
                 .then(response => response.json())
                 .then(data => {
 
                    setAds(data);

             })
     .catch(error => {
                     console.error(error);
                 });
         }
         fetchData();
    },[])


return(
        <div className={cln('container', {
            'container--sidebarExpanded': isSidebarExpanded
        })}>
            <Sidebar openSidebar={() => setIsSidebarExpanded(isExpanded => !isExpanded)}/>
            <Search/>
            <div className={css.categoryTiles}>
                <CategoryTile categoryIcon={study}/>
                <CategoryTile categoryIcon={deal}/>
                <CategoryTile categoryIcon={sport}/>
                <CategoryTile categoryIcon={info}/>
            </div>
            <div className={css.adTiles}>
            <AdTile title="test" description="test test" isOd/>
                {
                    ads.map(({id, title, description}, index) => 
                        <AdTile title={title} description={description} isOdd={index % 2 !== 0} key={id}/>
                )}
                
            </div>
           {isSidebarExpanded &&  
           <div className={css.userAds}>
                <div className={css.title}>
                    Twoje ogłoszenia
                </div>  
                <div className={css.adPreviews}>
                <AdPreview title="test" description="test test" category={study}/>
                <AdPreview title="test" description="test test" category={study}/>
                    {/* {ads.map(({ title, description, category }) => <AdPreview title={title} description={description} category={category}/> )} */}
                </div> 
            </div> 
            }
        </div>
    )}

export default WallScreen;