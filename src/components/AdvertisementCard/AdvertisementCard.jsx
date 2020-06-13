import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './AdvertisementCard.module.scss';
import study from '../../icons/lifebuoy.png';
import hand from '../../icons/stop_green.png';

import deal from '../../icons/agreement.png';
import sport from '../../icons/ball.png';
import info from '../../icons/info.png';

const URL = 'http://localhost:8082/api/v1/advertisements'

const AdvertisementCard = () => 
{   
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [interestedNumber, setInterestedNumber] = useState(0);
    const { id } = useParams();

    const beInterested = async () => {

        const payload = {
            'interestedNumber': interestedNumber + 1
        };

        console.log(typeof JSON.stringify(payload));

        await fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => { return response})
        .then(data => {
                
                    setInterestedNumber(number => number+1);
                   

        })
    }

    useEffect(() => {
        async function fetchData() {
            await fetch(`${URL}/${id}`)
                 .then(response => response.json())
                 .then(data => {
                    const { title, description, category, interestedNumber } = data;
                    setTitle(title);
                    setDescription(description);
                    setCategory(category);
                    setInterestedNumber(interestedNumber);
             })
            .catch(error => {
                            console.error(error);
                        });
                }
                fetchData();
            },[id])

    const thumbnails = { "study": study, "deal": deal, "sport": sport, "info": info };

    return(
        <div className={css.container}>
            <div className={css.header}>
            <img src={thumbnails[category]} alt={`${study}`} className={css.icon}/>
                <div className={css.title}>
                    {title}
                </div>
            </div>

            <div className={css.description}>
                {description}
            </div>

            <div className={css.interested}>
                <div className={css.interestedTitle}>
                    Zainteresowanych
                </div>
                <div className={css.number}>
                    {interestedNumber}
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