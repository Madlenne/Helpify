import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import SaveIcon from '../../icons/floppy-disk.png';
import classnames from 'classnames/bind';

import css from './Comment.module.scss';

const cln = classnames.bind(css);


const Comment = ({ authorId, text, isNew, adId, toggleCommentInput}) =>{
    
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            "authorId": userId,
            "description": comment,
            "adId": adId,
        }
        const URL = "http://localhost:8082/api/v1/comments";

        await fetch(URL, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {console.log(response); return response})
        toggleCommentInput();
        
    }

    const handleOnChange = (event, setter) => {
        setComment(event.target.value);
    }

    useEffect(() => {

        async function fetchData() {
        const URL = "http://localhost:8082/api/v1/users";

            await fetch(`${URL}/${userId}`)
                 .then(response => response.json())
                 .then(data => {
                    console.log(data);
                    const { login } = data;
                     setAuthor(login);

             })
     .catch(error => {
                     console.error(error);
                 });
         }
        //  if(authorId){

             fetchData();
        //  }
    },[authorId, userId])


    

    return(
        <div className={cln('container', {
            'container--noBorder': isNew
        })}>
            
            <form onSubmit={handleOnSubmit} className={css.form}>
                <div className={css.user}>
                    {author}
                </div>
        
                <div className={css.comment}>
                    {
                        isNew ? 
                        <>
                            <textarea onChange={(event) => handleOnChange(event, setComment)} placeholder="Add new comment"></textarea>
                            <button type="submit" className={css.submitButton}> <img src={SaveIcon} alt="saveIcon" className={css.saveIcon}/> </button>
                        </>
                        : text
                    }
                </div>
             </form>
                
           
            </div>

    )};

    Comment.propTypes = {
        text: PropTypes.string.isRequired, 
        isNew: PropTypes.bool,
    }
    
    Comment.defaultProps = {
        isNew: false,

    }

export default Comment;