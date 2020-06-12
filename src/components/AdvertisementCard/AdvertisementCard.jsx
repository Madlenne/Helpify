import React, { useState } from 'react';
import css from './AdvertisementCard.module.scss';
import study from '../../icons/lifebuoy.png';
import hand from '../../icons/stop_green.png';



const AdvertisementCard = () => 
{   
    const [interested, setInterested] = useState(1);

    const beInterested = () => {
        setInterested(number => number+1)
    }

    return(
        <div className={css.container}>
            <div className={css.header}>
            <img src={study} alt={`${study}`} className={css.icon}/>
                <div className={css.title}>
                    Analiza matematyczna
                </div>
            </div>

            <div className={css.description}>
            Oferuje pomoc z zakresu analizy matematycznej, rozwiązywanie zadań, nauka do egzaminu, zarówno stacjonarnie jak i online 
            </div>

            <div className={css.interested}>
                <div className={css.interestedTitle}>
                    Zainteresowanych
                </div>
                <div className={css.number}>
                    {interested}
                </div>
                <div className={css.beInterested} onClick={beInterested}>
                     <img src={hand} alt={`${hand}`} className={css.interestedIcon}/>
                     <span>
                    Interesuję się

                     </span>

                </div>
            </div>
        </div>
    )}

export default AdvertisementCard;