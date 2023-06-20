import React, { ChangeEvent } from "react";
import { MyPost } from "./MyPost/MyPost";
import { ProfileInfo } from "./profileinfo/ProfileInfo";
import { PostsType } from '../../redux/store'

type PropsType = {
    profilePage: PostsType
    newPostText: string
    dispatch: (action: any) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className='content'>
            <ProfileInfo />
            <MyPost posts={props.profilePage}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    )
}
