import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../../redux/profileReducer';



const MyPosts = (props) => {
    
    let postElement = props.profilePage.posts.map( data => <Post 
                                                                message={data.message} 
                                                                likeCount={data.likeCount} 
                                                                key={data.id}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        //props.addPost();
        props.dispatch( addPostActionCreator() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        props.dispatch( updateNewPostTextActionCreator(text) );
    }

    return (
        <div>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} 
                              ref={newPostElement} 
                              value={props.profilePage.newPostText}
                              placeholder="Enter you post"/>
                </div>
                <div>
                    <button onClick={ addPost }>Submit post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
        </div>
    );
}
export default MyPosts;