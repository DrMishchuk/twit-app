import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    
    return (
        <div className={style.wrapper}>
            <ProfileInfo profile={props.profile}/>
            <MyPosts 
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
        
    )
}

export default Profile;