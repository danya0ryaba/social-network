import React, { ChangeEvent, RefObject } from "react";
import { S } from './mypost_style'
import { Post } from "./Post/Post";
import { PostsType } from "../../../redux/store";
import { addNewPostActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'


type PropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostsType
    newPostText: string
}

export const MyPost = (props: PropsType) => {

    const renderPostData = props.posts.map(elem => <Post key={elem.id}
        message={elem.message} like={elem.like} />
    )

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }
    const onAddPost = () => props.addPost()


    return (
        <S.MyPostWrapper>
            <h3>My Post</h3>
            <div>
                <div><textarea value={props.newPostText} onChange={onPostChange} /></div>
                <button onClick={onAddPost}>add post</button>
            </div>
            <div>
                {renderPostData}
            </div>
        </S.MyPostWrapper >
    )
}