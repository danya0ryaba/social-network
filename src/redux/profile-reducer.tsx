import { profileAPI, usersAPI } from "../DAL/api"
import { Dispatch, AnyAction } from 'redux';

const ADD_POST = 'ADD_POST'
const UPDATE_NEWPOST_TEXT = 'UPDATE_NEWPOST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

// ==================== ТИПИЗАЦИЯ STATE ==================== //
export type ProfilePageType = {
    post: Array<PostItemType>
    // newPostText: string,
    profile: null
    status: string
}
export type PostItemType = {
    message?: string
    id: number
    like: number
}

// ==================== ТИПИЗАЦИЯ ACTION ==================== //
type addPostActionCreatorType = {
    type: 'ADD_POST'
    post: string
}
type addNewPostActionCreatorType = {
    type: 'UPDATE_NEWPOST_TEXT'
    newText: string
}
type setUSerProfileType = {
    type: 'SET_USER_PROFILE'
    profile: any
}
type SetStatusActionCreatorType = {
    type: 'SET_STATUS',
    status: string
}
type DeletePostActionCreatorType = {
    type: 'DELETE_POST'
    id: number
}

type ActionType = addPostActionCreatorType | addNewPostActionCreatorType
    | setUSerProfileType | SetStatusActionCreatorType | DeletePostActionCreatorType


const initialState: ProfilePageType = {
    post: [
        { message: 'Way of the samurai', id: 1, like: 20 },
        { message: 'React kabzda kak prostoax', id: 2, like: 0 }
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newAddPost = { message: action.post, id: state.post.length + 1, like: 0 }
            return { ...state, post: [...state.post, newAddPost] }
        case UPDATE_NEWPOST_TEXT:
            return { ...state, newPostText: action.newText }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        case DELETE_POST:
            return { ...state, post: state.post.filter(post => post.id !== action.id) }
        default:
            return state
    }
}

// ========== ACTION-CREATOR ========== //
export const addPostActionCreator = (post: string): addPostActionCreatorType => ({ type: ADD_POST, post })
export const addNewPostActionCreator = (newText: string): addNewPostActionCreatorType => ({ type: UPDATE_NEWPOST_TEXT, newText })
export const deletePostActionCreator = (id: number): DeletePostActionCreatorType => ({ type: DELETE_POST, id })
export const setUserProfile = (profile: any): setUSerProfileType => ({ type: SET_USER_PROFILE, profile })


export const setStatus = (status: string) => ({ type: SET_STATUS, status })


export const getUserProfile = (userId: string) => async (dispatch: Dispatch<AnyAction>) => {
    const resp = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(resp.data))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch<AnyAction>) => {
    const resp = await profileAPI.getStatus(userId);
    dispatch(setStatus(resp.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch<AnyAction>) => {
    const resp = await profileAPI.updateStatus(status);
    if (resp.data.resultCode === 0) dispatch(setStatus(status))
}
