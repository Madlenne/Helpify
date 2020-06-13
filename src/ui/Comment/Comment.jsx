import React, {useState} from 'react';
import PropTypes from 'prop-types';

import SaveIcon from '../../icons/floppy-disk.png';
import classnames from 'classnames/bind';

import css from './Comment.module.scss';

const cln = classnames.bind(css);

const URL = "http://localhost:8082/api/v1/advertisements";

const Comment = ({ text, isNew }) =>{
    
    const [author, setAuthor] = useState('USER');
    const [comment, setComment] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const payload ={
            "author": author,
            "comment": comment
        }
        console.log(payload);
    }

    const handleOnChange = (event, setter) => {
        setComment(event.target.value);
    }

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