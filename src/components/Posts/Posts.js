import React from 'react';
import './Posts.scss'

import Post from '../Post/Post';

const Posts = ({ catPosts, likePost, unlikePost, catLikedPosts }) => {
        return ( <
                ul className = "posts-grid" > {
                    catPosts.map((catPost) => < Post unlikePost = { unlikePost }
                        key = { catPost.id }
                        catPost = { catPost }
                        catLikedPosts = { catLikedPosts }
                        likePost = { likePost }
                        catPosts = {catPosts}
                        />)} <
                        /ul> 
                    )
                }

                export default Posts;