import { Dispatch, AnyAction } from 'redux';
import { usersAPI } from "../DAL/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const IS_FETCHING = 'IS_FETCHING'
const IS_DISABLED_FOLLOW = 'IS_DISABLED_FOLLOW'

// =========== ТИПИЗАЦИЯ НА STATE =========== //
export type IsDisabletType = number[] | []
export type UsersType = {
    users: UserItemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean,
    isDisabledFollow: IsDisabletType
}
export type UserItemType = {
    id: number
    photos: {
        small: null
        large: null
    }
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
}

// =========== STATE =========== //
const initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isDisabledFollow: []
}

// =========== ТИПИЗАЦИЯ НА ACTION =========== //
type FollowACType = {
    type: 'FOLLOW',
    userId: number
}
type UnollowACType = {
    type: 'UNFOLLOW',
    userId: number
}
type SetUsersACType = {
    type: 'SET_USERS',
    users: UserItemType[]
}
type SetCurrentPageACType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
type SetTotalCountACType = {
    type: 'SET_TOTAL_COUNT'
    totalCount: number
}
type SetIsFetchingACType = {
    type: 'IS_FETCHING'
    isFetch: boolean
}
type SetDisabledFollowAC = {
    type: 'IS_DISABLED_FOLLOW'
    isFetching: boolean
    id: number
}
type ActionsType = FollowACType | UnollowACType | SetUsersACType
    | SetCurrentPageACType | SetTotalCountACType | SetIsFetchingACType | SetDisabledFollowAC

export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ?
                    { ...user, followed: true } : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ?
                    { ...user, followed: false } : user)
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case IS_FETCHING:
            return { ...state, isFetching: action.isFetch }
        case IS_DISABLED_FOLLOW:
            return {
                ...state,
                isDisabledFollow: action.isFetching ?
                    [...state.isDisabledFollow, action.id]
                    :
                    state.isDisabledFollow.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

// ================= AC ================= //
export const acceptFollow = (userId: number): FollowACType => ({ type: FOLLOW, userId })
export const acceptUnfollow = (userId: number): UnollowACType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: UserItemType[]): SetUsersACType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount: number): SetTotalCountACType => ({ type: SET_TOTAL_COUNT, totalCount })
export const setIsFetching = (isFetch: boolean): SetIsFetchingACType => ({ type: IS_FETCHING, isFetch })
export const setDisabledFollow = (isFetching: boolean, id: number): SetDisabledFollowAC => ({ type: IS_DISABLED_FOLLOW, isFetching, id })


// ================= THUNK REDUX ================= //
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalCount(response.totalCount))
        })
    }
}


export const followThunkCreator = (userId: number) => {

    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(setDisabledFollow(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(acceptFollow(userId))
            }
            dispatch(setDisabledFollow(false, userId))
        })
    }

}

export const unfollowThunkCreator = (userId: number) => {

    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(setDisabledFollow(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(acceptUnfollow(userId))
            }
            dispatch(setDisabledFollow(false, userId))
        })
    }

}