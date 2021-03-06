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
import config  from '../../config.js'
import AdTile from '../../ui/AdTile/AdTile.jsx';

import css from './WallScreen.module.scss';
const cln = classnames.bind(css);


const WallScreen = () => {

    const [ads, setAds] = useState([]);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        let URL = `${config.BASE_URL}/api/v1/advertisements`;

        if(currentCategory){
            URL = URL + `/category/${currentCategory}`;
        }

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
    },[currentCategory])
    
    return(
        <div className={cln('container', {
            'container--sidebarExpanded': isSidebarExpanded
        })}>
            <Sidebar openSidebar={() => setIsSidebarExpanded(isExpanded => !isExpanded)}/>
            <Search/>
            <div className={css.categoryTiles}>
                <CategoryTile categoryIcon={study} onClick={() => setCurrentCategory("study")}/>
                <CategoryTile categoryIcon={deal}  onClick={() => setCurrentCategory("deal")} />
                <CategoryTile categoryIcon={sport}  onClick={() => setCurrentCategory("sport")} />
                <CategoryTile categoryIcon={info}  onClick={() => setCurrentCategory("info")} />
            </div>
            <div className={css.adTiles}>
                {
                    ads.map(({id, title, description}, index) => 
                        <AdTile id ={id} title={title} description={description} isOdd={index % 2 !== 0} key={id}/>
                )}
                
            </div>
           {isSidebarExpanded &&  
           <div className={css.userAds}>
                <div className={css.title}>
                    Twoje ogłoszenia
                </div>  
                <div className={css.adPreviews}>
                {
                ads.map(({ id, title, description, authorId }, index) => {
                    if(authorId === Number(sessionStorage.getItem('userId'))){
                       return <AdPreview id={id} title={title} description={description} category={study}/>;
                    }
                })
            }
                
                </div> 
            </div> 
            }
        </div>
    )}

export default WallScreen;