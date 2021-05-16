import React from 'react';
import './PostsAll.scss';

import Posts from '../Posts/Posts'

function PostAll({ catPosts, likePost, unlikePost, catLikedPosts }) {
    return ( <
        Posts unlikePost = { unlikePost }
        likePost = { likePost }
        catPosts = { catPosts }
        catLikedPosts = { catLikedPosts }
        />
    )
}

export default PostAll;