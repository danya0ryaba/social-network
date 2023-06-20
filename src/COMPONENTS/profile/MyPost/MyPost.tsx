import React, { ChangeEvent, RefObject } from "react";
import { S } from './mypost_style'
import { Post } from "./Post/Post";
import { PostsType } from "../../../redux/store";
import { addNewPostActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'


type PropsType = {
    posts: PostsType
    dispatch: (action: any) => void
    newPostText: string
}

export const MyPost = (props: PropsType) => {

    const renderPostData = props.posts.map(elem => <Post key={elem.id}
        message={elem.message} like={elem.like} />
    )

    const onChangeNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(addNewPostActionCreator(e.currentTarget.value))
    }
    const onClickNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <S.MyPostWrapper>
            <h3>My Post</h3>
            <div>
                <div><textarea value={props.newPostText} onChange={onChangeNewPostHandler} /></div>
                <button onClick={onClickNewPost}>add post</button>
            </div>
            <div>
                {renderPostData}
            </div>
        </S.MyPostWrapper >
    )
}