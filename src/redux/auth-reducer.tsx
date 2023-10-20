import { Dispatch, AnyAction } from 'redux';
import { authAPI, securityAPI } from '../DAL/api';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const SET_CAPTCHA_URL_SECCESS = 'samurai-network/auth/SET_CAPTCHA_URL_SECCESS'
// ========== это типизация для уже залогининова пользователя ========== //
type initialStateType = {
    data: DataItemType
    messages: []
    // fieldsErrors: []
    resultCode: number
    isAuth: boolean
    captcha?: any
}
export type DataItemType = {
    id: number | null
    login: string | null
    email: string | null
}
// ================= ТИПИЗАЦИЯ ДЛЯ ACTION =================//

type SetAuthUserDataACType = {
    type: 'samurai-network/auth/SET_USER_DATA'
    data: DataItemType
    isAuth: boolean
}
type SetCaptachaACType = {
    type: 'samurai-network/auth/SET_CAPTCHA_URL_SECCESS'
    url: any
}
type ActionType = SetAuthUserDataACType | SetCaptachaACType

const initialState: initialStateType = {
    data: {
        id: 29605,
        login: "danyaryaba",
        email: "daniba0@gmail.com"
    },
    messages: [],
    // fieldsErrors: [],
    resultCode: 0,
    isAuth: false,
    captcha: null
}

export const authReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, data: { ...action.data }, isAuth: action.isAuth }
        case SET_CAPTCHA_URL_SECCESS:
            return { ...state, captcha: action.url }
        default:
            return state
    }
}

// ================ AC ================ //
export const setAuthUserData = (data: DataItemType, isAuth: boolean) => ({ type: SET_USER_DATA, data, isAuth })
export const setCaptacha = (url: string) => ({ type: SET_CAPTCHA_URL_SECCESS, url })

// ================ THUNK ================ //
export const getAuthUserData = () => async (dispatch: Dispatch<AnyAction>) => {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) dispatch(setAuthUserData(res.data.data, true))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.data.resultCode === 0) dispatch(getAuthUserData())
    else {
        if (res.data.resultCode === 10) dispatch(getCaptchaUrl());

        dispatch(setAuthUserData(res.data, false))
    }
}

export const logout = () => async (dispatch: Dispatch<AnyAction>) => {
    const res = await authAPI.logout();
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({ id: null, login: null, email: null }, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<AnyAction>) => {
    const resp = await securityAPI.getCaptcha()
    const captchaUrl = resp.data.url
    dispatch(setCaptacha(captchaUrl))
}