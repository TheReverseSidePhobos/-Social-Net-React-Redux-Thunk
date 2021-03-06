import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';

export const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus}/>
            <hr/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
