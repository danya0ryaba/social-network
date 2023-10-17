import { Dispatch, AnyAction } from 'redux';
import { authAPI } from '../DAL/api';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

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
    data: {
        id: 29605,
        login: "danyaryaba",
        email: "daniba0@gmail.com"
    },
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false
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

export const getAuthUserData = () => async (dispatch: Dispatch<AnyAction>) => {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) dispatch(setAuthUserData(res.data.data, true))
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe);
    if (res.data.resultCode === 0) dispatch(getAuthUserData())
    else dispatch(setAuthUserData(res.data, false))
}

export const logout = () => async (dispatch: Dispatch<AnyAction>) => {
    const res = await authAPI.logout();
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({ id: null, login: null, email: null }, false))
    }
}