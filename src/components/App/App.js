import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from '../Header/Header';
import PostsAll from '../PostsAll/PostsAll'
import PostsLiked from '../PostsLiked/PostsLiked';
import fetchCats from '../../service/FetchCats';


function App() {

    const [catPosts, setCatPosts] = useState([])
    const [catLikedPosts, setCatLikedPosts] = useState([])

    useEffect(() => {
        fetchCats.getCatList()
            .then((res) => {
                setCatPosts([...catPosts, ...res])

                // setCountPage(count => count + 1)
            })
            .catch(err => console.log(err))
            // .finally(() => setIsFitching(false))

    }, [])
    console.log(catPosts)

    useEffect(() => {
        fetchCats.getSavedCat()
            .then((res) => {
                setCatLikedPosts(res)
                console.log('likedCat', res)
            })
            .catch(err => console.log(err))
    }, []);
    console.log('LikedcatPosts', catLikedPosts.length === 0)

    const getSavedCatList = () => {
        fetchCats.getSavedCat()
            .then((res) => {
                localStorage.setItem('likedPosts', JSON.stringify(res))
                setCatLikedPosts(JSON.parse(localStorage.getItem('likedPosts')))
                console.log('likedCats', res)
            })
            .catch(err => console.log(err))
    }


    const likePost = (postId) => {
        fetchCats.likeCat(postId)
            .then(() => {
                getSavedCatList()
            })
    }

    const unlikePost = (postId) => {
        fetchCats.unlikeCat(postId)
            .then(() => {
                getSavedCatList()
            })
    }


    return ( 
        <div className = "App" >
            <Header/>
            <Switch >
                <Route path = "/all-posts" >
                    <PostsAll unlikePost = { unlikePost }
                    likePost = { likePost }
                    catPosts = { catPosts }
                    catLikedPosts = { catLikedPosts }/>
                </Route > 
                    <Route path = "/liked-posts" >
                    <PostsLiked unlikePost = { unlikePost }
                    likePost = { likePost } 
                    catPosts = {catPosts}
                    catLikedPosts = { catLikedPosts }/> 
                </Route > 
            </Switch> 
        </div >
    );
}

export default App;