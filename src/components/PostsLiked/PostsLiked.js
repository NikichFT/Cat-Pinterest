import React from 'react';
import './PostsLiked.scss';

import Post from '../Post/Post'

function PostsLiked({catLikedPosts, unlikePost, likePost, catPosts}){
  
  return(
    (catLikedPosts.length === 0) ? <div className="no-cats">
      <img className="no-cats-img" alt="" src="https://www.tynker.com/projects/images/5c00182b4b12d530fa6dc8d9/no-toche---5845e10e7733c3558233c0ea.png"></img>
      <div className="no-cats-title">Пока нет любимых котиков</div>
      </div> : (
      <ul className="posts-grid">
        {catLikedPosts.map((catPost)=><Post likePost={likePost} unlikePost={unlikePost} catPosts={catPosts} catLikedPosts={catLikedPosts} key={catPost.id} catPost={catPost}/>)}
      </ul>)
  )
}

export default PostsLiked;