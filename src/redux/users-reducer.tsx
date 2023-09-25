import { type } from "os"
import { DialogsPageType } from "./store"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
// =========== ТИПИЗАЦИЯ НА STATE =========== //
export type UsersType = {
    users: UserItemType[]
}
export type UserItemType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}
const initialState = {
    users: []
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
type ActionsType = FollowACType | UnollowACType | SetUsersACType


export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {

    switch (action.type) {
        case FOLLOW:
            console.log(action)
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user)
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}

// ================= AC ================= //
export const followAC = (userId: number): FollowACType => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number): UnollowACType => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: UserItemType[]): SetUsersACType => ({ type: SET_USERS, users })