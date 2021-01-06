import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';


const MyPosts = (props) => {
    return (
        <div>
            <h3>MyPosts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Submit post</button></div>
            </div>
            <div className={style.posts}>
                <Post message="Post1" likeCount="10" />
                <Post message="Post2" likeCount="20" />
            </div>
        </div>
    );
}
export default MyPosts;