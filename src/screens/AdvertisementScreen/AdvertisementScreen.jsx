import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Search from '../../components/Search/Search.jsx';
import AdvertisementCard from '../../components/AdvertisementCard/AdvertisementCard.jsx';
import { useParams } from 'react-router-dom';

import Comment from '../../ui/Comment/Comment.jsx';
import Edit from '../../icons/pen.png';

import css from './AdvertisementScreen.module.scss';

const URL = "http://localhost:8082/api/v1/comments/advertisement"


const AdvertisementScreen = () => {

    const [showCommentInput, setShowCommentInput] =  useState(false);
    const [comments, setComments] =  useState([]);
    const { id } = useParams();

    const toggleCommentInput = () => {
        setShowCommentInput(isShown => !isShown);
    }

    useEffect(() => {

        async function fetchData() {

            await fetch(`${URL}/${id}`)
                 .then(response => response.json())
                 .then(data => {
 
                    setComments(data);

             })
     .catch(error => {
                     console.error(error);
                 });
         }
         fetchData();
    },[id, showCommentInput])

    // const comments = ['Lorem ipsum dolor sit amet, nec an labitur epicurei facilisis', 'melius volumus an mei. Omnium fierent mel id', 'melius volumus an mei. Omnium fierent mel id', 'melius volumus an mei. Omnium fierent mel id, inermis democritum pri ex. Munere possim constituam ne nam. '];
    console.log(comments);
    return(
        <div className={css.container}>
            <Sidebar/>
            <Search/>
            <AdvertisementCard />
            
            <div className={css.comments}>
            {showCommentInput &&
                <Comment isNew={showCommentInput} adId={id} toggleCommentInput={toggleCommentInput}/>
            }
                {comments.map(({authorId, description}) =>  <Comment authorId={authorId}  text={description} /> )}

            <img src={Edit} alt={`${Edit}`} className={css.icon} onClick={toggleCommentInput} />
            

            </div>

        </div>
    )}

export default AdvertisementScreen;