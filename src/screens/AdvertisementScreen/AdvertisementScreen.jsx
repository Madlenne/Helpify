import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Search from '../../components/Search/Search.jsx';
import AdvertisementCard from '../../components/AdvertisementCard/AdvertisementCard.jsx';
import Comment from '../../ui/Comment/Comment.jsx';
import Edit from '../../icons/pen.png';

import css from './AdvertisementScreen.module.scss';

const AdvertisementScreen = () => {

    const [showCommentInput, setShowCommentInput] =  useState(false);

    const toggleCommentInput = () => {
        setShowCommentInput(isShown => !isShown);
    }

    const comments = ['Lorem ipsum dolor sit amet, nec an labitur epicurei facilisis', 'melius volumus an mei. Omnium fierent mel id', 'melius volumus an mei. Omnium fierent mel id', 'melius volumus an mei. Omnium fierent mel id, inermis democritum pri ex. Munere possim constituam ne nam. '];

    return(
        <div className={css.container}>
            <Sidebar/>
            <Search/>
            <AdvertisementCard />
            
            <div className={css.comments}>
            {showCommentInput &&
                <Comment isNew={showCommentInput}/>
            }
                {comments.map(comment =>  <Comment text={comment} /> )}

            <img src={Edit} alt={`${Edit}`} className={css.icon} onClick={toggleCommentInput} />
            

            </div>

        </div>
    )}

export default AdvertisementScreen;