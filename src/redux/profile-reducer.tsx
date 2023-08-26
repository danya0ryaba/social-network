import { ProfilePageType } from "./store"

const ADD_POST = 'ADD-POST'
const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT'

const initialState = {
    post: [
        { message: 'Way of the samurai', id: 1, like: 20 },
        { message: 'React kabzda kak prostoax', id: 2, like: 0 }
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: { type: string, newText: string }) => {
    switch (action.type) {
        case ADD_POST:
            const newAddPost = { message: state.newPostText, id: state.post.length + 1, like: 0 }
            return { ...state, post: [...state.post, newAddPost], newPostText: '' }
        case UPDATE_NEWPOST_TEXT:
            return { ...state, newPostText: action.newText }
        default:
            return state
    }
}

// ========== ACTION-CREATOR ========== //
export const addPostActionCreator = () => ({ type: ADD_POST })

export const addNewPostActionCreator = (onTextPost: string) => {
    return { type: UPDATE_NEWPOST_TEXT, newText: onTextPost }
}