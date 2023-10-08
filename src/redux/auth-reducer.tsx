import { Dispatch, AnyAction } from 'redux';
import { authAPI } from '../DAL/api';

const SET_USER_DATA = 'SET_USER_DATA'

// ========== это типизация для уже залогининова пользователя ========== //
type initialStateType = {
    data: DataItemType
    messages: []
    fieldsErrors: []
    resultCode: number
    isAuth: boolean
}
export type DataItemType = {
    id: number | null
    login: string | null
    email: string | null
}
// ================= ТИПИЗАЦИЯ ДЛЯ ACTION =================//

type ActionType = ReturnType<typeof setAuthUserData>


const initialState: initialStateType = {
    "data": {
        "id": 29605,
        "login": "danyaryaba",
        "email": "daniba0@gmail.com"
    },
    "messages": [],
    "fieldsErrors": [],
    "resultCode": 0,
    "isAuth": false
}

export const authReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataItemType, isAuth: boolean) => ({ type: SET_USER_DATA, data, isAuth })

// не понятно зачем я написал этот тип ????????
export type GetAuthUserDataType = ReturnType<typeof getAuthUserData>

export const getAuthUserData = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        authAPI.me().then(res => {
            if (res.data.resultCode === 0) dispatch(setAuthUserData(res.data.data, true))
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) dispatch(getAuthUserData())
        })
    }
}

export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData({ id: null, login: null, email: null }, false))
            }
        })
    }
}