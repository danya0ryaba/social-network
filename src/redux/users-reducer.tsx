const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const IS_FETCHING = 'IS_FETCHING'
// =========== ТИПИЗАЦИЯ НА STATE =========== //

export type UsersType = {
    users: UserItemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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

const initialState: UsersType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
type ActionsType = FollowACType | UnollowACType | SetUsersACType | SetCurrentPageACType | SetTotalCountACType | SetIsFetchingACType

export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
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
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case IS_FETCHING:
            return { ...state, isFetching: action.isFetch }
        default:
            return state
    }
}

// ================= AC ================= //
export const follow = (userId: number): FollowACType => ({ type: FOLLOW, userId })
export const unfollow = (userId: number): UnollowACType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: UserItemType[]): SetUsersACType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount: number): SetTotalCountACType => ({ type: SET_TOTAL_COUNT, totalCount })
export const setIsFetching = (isFetch: boolean): SetIsFetchingACType => ({ type: IS_FETCHING, isFetch })
