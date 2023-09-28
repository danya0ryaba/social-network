const ADD_POST = 'ADD_POST'
const UPDATE_NEWPOST_TEXT = 'UPDATE_NEWPOST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

// ==================== ТИПИЗАЦИЯ STATE ==================== //
export type ProfilePageType = {
    post: Array<PostItemType>
    newPostText: string,
    profile: null
}
export type PostItemType = {
    message?: string
    id: number
    like: number
}

// ==================== ТИПИЗАЦИЯ ACTION ==================== //
type addPostActionCreatorType = {
    type: 'ADD_POST'
}
type addNewPostActionCreatorType = {
    type: 'UPDATE_NEWPOST_TEXT'
    newText: string
}
type setUSerProfileType = {
    type: 'SET_USER_PROFILE'
    profile: any
}
type ActionType = addPostActionCreatorType | addNewPostActionCreatorType | setUSerProfileType


const initialState: ProfilePageType = {
    post: [
        { message: 'Way of the samurai', id: 1, like: 20 },
        { message: 'React kabzda kak prostoax', id: 2, like: 0 }
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newAddPost = { message: state.newPostText, id: state.post.length + 1, like: 0 }
            return { ...state, post: [...state.post, newAddPost], newPostText: '' }
        case UPDATE_NEWPOST_TEXT:
            return { ...state, newPostText: action.newText }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state
    }
}

// ========== ACTION-CREATOR ========== //
export const addPostActionCreator = (): addPostActionCreatorType => ({ type: ADD_POST })

export const addNewPostActionCreator = (newText: string): addNewPostActionCreatorType => ({ type: UPDATE_NEWPOST_TEXT, newText })

export const setUserProfile = (profile: any): setUSerProfileType => ({ type: SET_USER_PROFILE, profile })