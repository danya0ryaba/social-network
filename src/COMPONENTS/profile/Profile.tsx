import React, { ChangeEvent } from "react";
import { MyPost } from "./MyPost/MyPost";
import { ProfileInfo } from "./profileinfo/ProfileInfo";
import { PostsType } from '../../redux/store'
import { MyPostContainer } from "./MyPost/MyPostContainer";
import { MyContext } from "../..";

type PropsType = {
    store: any
}

export const Profile = () => {

    const store = React.useContext(MyContext)

    return (
        <div className='content'>
            <ProfileInfo />
            <MyPostContainer store={store} />
        </div>
    )
}
