import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import css from './AdvertisementCard.module.scss';
import study from '../../icons/lifebuoy.png';
import hand from '../../icons/stop_green.png';
import bin from '../../icons/bin.png';

import deal from '../../icons/agreement.png';
import sport from '../../icons/ball.png';
import info from '../../icons/info.png';

import config  from '../../config.js'


const URL = `${config.BASE_URL}/api/v1/advertisements`

const AdvertisementCard = () => 
{   
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [interestedNumber, setInterestedNumber] = useState(0);
    const { id } = useParams();

    const beInterested = async () => {

        const payload = {
            'interestedNumber': interestedNumber + 1
        };

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
                    const { title, description, category, interestedNumber, authorId } = data;
                    setTitle(title);
                    setAuthorId(authorId);
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

    const deleteAd = () => {
        
        async function fetchData() {
            await fetch(`${URL}/${id}`, {
                method: 'DELETE',
               
            })
                 .then(response => response)
                 .then(data => {
                    history.push("/wall");
             })
            .catch(error => {
                            console.error(error);
                        });
        }
            fetchData();
    }

    const thumbnails = { "study": study, "deal": deal, "sport": sport, "info": info };

    return(
        <div className={css.container}>
            <div className={css.header}>
            <img src={thumbnails[category]} alt={`${study}`} className={css.icon}/>
                <div className={css.title}>
                    {title}
                </div>
                {
                    authorId === Number(sessionStorage.getItem('userId'))
                        &&
                    <img src={bin} alt="bin" className={css.delete} onClick={deleteAd}/>

                }

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