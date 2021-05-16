import React, { useEffect, useState } from 'react';
import LikeButton from './LikeButton/LikeButton';
import './Post.scss';

function Post({ catPost, likePost, unlikePost, catLikedPosts, catPosts }) {

    const [likeButton, setLikeButton] = useState(false)

    useEffect(()=>{
        catLikedPosts.forEach((cat) => {
            if (cat.image_id === catPost.id) {
                catPost.id = cat.id
                console.log(cat.id)
            }
        })
    }, [catLikedPosts])

    useEffect(() => {
        if (catPost.image_id) {
            setLikeButton(true)
        }
        if (catPost.like) {
            setLikeButton(true)
        }
    }, [])

    const likeCat = () => {
        catPost.like = true
        setLikeButton(true)
        likePost(catPost.id)
        console.log('catpost', catPost)
    }

    const unlikeCat = () => {
        catPost.like = false
        setLikeButton(false)
        unlikePost(catPost.id)
        if (!catPost.image_id){
            catLikedPosts.forEach((cat) => {
                if (cat.id === catPost.id) {
                    catPost.id = cat.image_id
                }
            })
        } else {
            catPosts.forEach((cat) => {
                if (cat.id === catPost.id) {
                    cat.like = false
                    cat.id = catPost.image_id
                }
            })
        }
    }

    return (
        <li className = "post"
        style = {
            { backgroundImage: `url(${catPost.url || catPost.image.url})` }
        }>
            <LikeButton likeButton = { likeButton }
            catPost = { catPost }
            likeCat = { likeCat }
            unlikeCat = { unlikeCat }
            likePost = { likePost }
            />
        </li >
    )
}

export default Post;