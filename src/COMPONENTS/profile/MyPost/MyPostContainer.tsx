import React, { ChangeEvent, RefObject } from "react";
import { S } from './mypost_style'
import { Post } from "./Post/Post";
import { PostsType } from "../../../redux/store";
import { addNewPostActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'
import { MyPost } from "./MyPost";
import { connect } from "react-redux";




// type PropsType = {
//     store_redux: any
// }

// export const MyPostContainer = (props: PropsType) => {

//     const state = props.store_redux.getState()

//     const onPostChange = (text: string) => {
//         const action = addNewPostActionCreator(text)
//         props.store_redux.dispatch(action)
//     }
//     const addPost = () => {
//         props.store_redux.dispatch(addPostActionCreator())
//     }

//     return (
//         <MyPost
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.post}
//             newPostText={state.profilePage.newPostText} />
//     )
// }

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => dispatch(addNewPostActionCreator(text)),
        addPost: () => { dispatch(addPostActionCreator()) }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)