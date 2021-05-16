import React from 'react';
import './LikeButton.scss';

function LikeButton ({catPost, likeCat, unlikeCat, likeButton}) {

    const handleClick = () =>{
        if (likeButton) {
            unlikeCat()

        } else {
            likeCat()
        }
    }

    return(
        <button 
            className={`like-button ${likeButton ? '_liked' : ''} `}
            onClick={handleClick}
        ></button>
    )
}

export default LikeButton;