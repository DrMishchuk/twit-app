import React from 'react';
import style from './ProfileInfo.module.css'



const ProfileInfo = (props) => {
    if (!props.profile){
        return "LOADING"
    }
    console.log(props.profile);
    return (
        <div className={style.content}>
            <div>
                <img src={props.profile.photos.large} />
            </div>
            
        </div>
        
    )
}

export default ProfileInfo;