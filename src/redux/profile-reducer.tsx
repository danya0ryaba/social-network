import { ProfilePageType } from "./store"

const ADD_POST = 'ADD-POST'
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT'

export const profileReducer = (state: ProfilePageType, action: { type: string, newText: string }) => {
    switch (action.type) {
        case ADD_POST:
            const newAddPost = { message: state.newPostText, id: state.post.length + 1, like: 0 }
            state.post.push(newAddPost)
            state.newPostText = ''
            return state
        case UPDATE_NEWPOST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

// ========== ACTION-CREATOR ========== //
export const addPostActionCreator = () => ({ type: ADD_POST })
export const addNewPostActionCreator = (onTextPost: string) => {
    return { type: UPDATE_NEWPOST_TEXT, newText: onTextPost }
}