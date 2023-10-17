import { profileAPI, usersAPI } from "../DAL/api"
import { Dispatch, AnyAction } from 'redux';

const ADD_POST = 'ADD_POST'
const UPDATE_NEWPOST_TEXT = 'UPDATE_NEWPOST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

// ==================== ТИПИЗАЦИЯ STATE ==================== //

// ОТВЕТ С СЕРВЕРА, но я его не использую!!!
export type ProfileApiSuccssesItem = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    post: Array<PostItemType>
    profile: any
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
    profile: null | ProfileApiSuccssesItem
}
type SetStatusActionCreatorType = {
    type: 'SET_STATUS',
    status: string
}
type DeletePostActionCreatorType = {
    type: 'DELETE_POST'
    id: number
}
type SavePhotoSuccssesActionCreatorType = {
    type: 'SAVE_PHOTO_SUCCESS'
    photos: any
}


type ActionType = addPostActionCreatorType | addNewPostActionCreatorType | setUSerProfileType
    | SetStatusActionCreatorType | DeletePostActionCreatorType | SavePhotoSuccssesActionCreatorType


const initialState: ProfilePageType = {
    post: [
        { message: 'Way of the samurai', id: 1, like: 20 },
        { message: 'React kabzda kak prostoax', id: 2, like: 0 }
    ],
    // ОБЪЕКТ КОТОРЫЙ ПРИХОДИТ С СЕРВЕРА 
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
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        default:
            return state
    }
}

// ========== ACTION-CREATOR ========== //
export const addPostActionCreator = (post: string): addPostActionCreatorType => ({ type: ADD_POST, post })
export const addNewPostActionCreator = (newText: string): addNewPostActionCreatorType => ({ type: UPDATE_NEWPOST_TEXT, newText })
export const deletePostActionCreator = (id: number): DeletePostActionCreatorType => ({ type: DELETE_POST, id })
export const setUserProfile = (profile: ProfileApiSuccssesItem): setUSerProfileType => ({ type: SET_USER_PROFILE, profile })
export const savePhotoSuccsses = (photos: any) => ({ type: 'SAVE_PHOTO_SUCCESS', photos })


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

export const savePhoto = (file: any) => async (dispatch: Dispatch<AnyAction>) => {
    const resp = await profileAPI.savePhoto(file)
    if (resp.data.resultCode === 0) dispatch(savePhotoSuccsses(resp.data.data.photos))
}